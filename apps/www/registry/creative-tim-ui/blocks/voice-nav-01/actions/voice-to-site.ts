"use server"

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js"
import { SpeechToTextChunkResponseModel } from "@elevenlabs/elevenlabs-js/api/types/SpeechToTextChunkResponseModel"
import { generateObject } from "ai"
import { z } from "zod"

const BASE_URL = "https://elevenlabs.io/docs"

async function fetchSitemap(baseUrl: string): Promise<string[]> {
  const sitemapUrl = `${baseUrl}/sitemap.xml`
  const response = await fetch(sitemapUrl)
  const xml = await response.text()
  const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || []

  const urls = urlMatches
    .map((match) => match.replace(/<\/?loc>/g, ""))
    .filter((url): url is string => url !== null)

  return [...new Set(urls)]
}

export async function voiceToSiteAction(audio: File) {
  try {
    if (!audio) {
      return { data: {} }
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
      console.warn("ElevenLabs API key not configured")
      return { data: {} }
    }

    const client = new ElevenLabsClient({ apiKey })
    const audioBuffer = await audio.arrayBuffer()
    const file = new File([audioBuffer], audio.name || "audio.webm", {
      type: audio.type || "audio/webm",
    })

    const transcriptionResult = await client.speechToText.convert({
      file,
      modelId: "scribe_v1",
      languageCode: "en",
    })

    const transcribedText = (
      transcriptionResult as SpeechToTextChunkResponseModel
    ).text

    if (!transcribedText) {
      return { data: {} }
    }

    const sitemap = await fetchSitemap(BASE_URL)
    const sitemapContext = sitemap.join("\n")

    const { object: extractedIntent } = await generateObject({
      model: "xai/grok-4-fast-non-reasoning",
      schema: z.object({
        url: z.string().describe("The full URL from the sitemap"),
      }),
      mode: "json",
      system: `You are a voice navigation assistant. Match user intent to a URL from the sitemap.

Available URLs:
${sitemapContext}

Return the full URL that best matches the user's intent.`,
      messages: [
        {
          role: "user",
          content: `User said: "${transcribedText}". Which URL best matches their intent?`,
        },
      ],
    })

    return {
      data: {
        url: extractedIntent.url,
      },
    }
  } catch (error) {
    console.error("Voice to site error:", error)
    return { data: {} }
  }
}

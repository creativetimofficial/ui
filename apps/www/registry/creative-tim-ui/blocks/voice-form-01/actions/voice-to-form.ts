"use server"

import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js"
import { SpeechToTextChunkResponseModel } from "@elevenlabs/elevenlabs-js/api/types/SpeechToTextChunkResponseModel"
import { generateObject } from "ai"

import { exampleFormSchema } from "@/registry/elevenlabs-ui/blocks/voice-form-01/schema"

const extractionSchema = exampleFormSchema.partial()

export async function voiceToFormAction(audio: File) {
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

    const schemaShape = exampleFormSchema.shape
    const fieldNames = Object.keys(schemaShape)

    const { object: extractedData } = await generateObject({
      model: "xai/grok-4-fast-non-reasoning",
      schema: extractionSchema,
      mode: "json",
      system: `You are a form field extraction assistant. Extract ${fieldNames.join(" and ")} from the speech.

CRITICAL RULES:
1. If just a name is said (like "John Smith"), extract it as firstName: "John", lastName: "Smith"
2. Handle patterns like "My name is...", "I'm...", etc.
3. Do NOT return empty strings - use undefined for fields not mentioned
4. ONLY extract information that is EXPLICITLY mentioned`,
      prompt: `Extract form field values from this speech: "${transcribedText}"

IMPORTANT: If this appears to be just a person's name, extract it as firstName and lastName fields.`,
    })

    return {
      data: extractedData,
    }
  } catch (error) {
    console.error("Voice to form error:", error)
    return { data: {} }
  }
}

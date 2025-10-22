"use client"

import * as React from "react"
import {
  Clock,
  Download,
  FileVideo,
  Film,
  Loader2,
  Pause,
  Play,
  Sparkles,
  Video,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const AI_PROVIDERS = [
  { value: "runway", label: "Runway Gen-3" },
  { value: "pika", label: "Pika Labs" },
  { value: "stability", label: "Stability AI Video" },
  { value: "google", label: "Google Veo" },
  { value: "openai", label: "OpenAI Sora" },
]

const VIDEO_DURATIONS = [
  { value: "3", label: "3 seconds" },
  { value: "5", label: "5 seconds" },
  { value: "10", label: "10 seconds" },
  { value: "15", label: "15 seconds" },
]

const VIDEO_STYLES = [
  { value: "realistic", label: "Realistic" },
  { value: "cinematic", label: "Cinematic" },
  { value: "animated", label: "Animated" },
  { value: "artistic", label: "Artistic" },
  { value: "abstract", label: "Abstract" },
]

interface GeneratedVideo {
  id: string
  prompt: string
  url: string
  thumbnail: string
  duration: string
  style: string
  timestamp: Date
}

export default function AIVideoGeneratorBlock() {
  const [prompt, setPrompt] = React.useState("")
  const [provider, setProvider] = React.useState("runway")
  const [apiKey, setApiKey] = React.useState("")
  const [duration, setDuration] = React.useState("5")
  const [style, setStyle] = React.useState("realistic")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [generatedVideos, setGeneratedVideos] = React.useState<
    GeneratedVideo[]
  >([])
  const [selectedVideo, setSelectedVideo] =
    React.useState<GeneratedVideo | null>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handleGenerate = async () => {
    if (!prompt.trim() || !apiKey) return

    setIsGenerating(true)
    setProgress(0)

    // Simulate video generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 300)

    // Simulate video generation
    await new Promise((resolve) => setTimeout(resolve, 6000))

    const newVideo: GeneratedVideo = {
      id: Date.now().toString(),
      prompt: prompt,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/640/360`,
      duration: duration,
      style: style,
      timestamp: new Date(),
    }

    setGeneratedVideos((prev) => [newVideo, ...prev])
    setSelectedVideo(newVideo)
    setIsGenerating(false)
    setProgress(0)
  }

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleDownload = () => {
    if (!selectedVideo) return
    const link = document.createElement("a")
    link.href = selectedVideo.url
    link.download = `ai-video-${selectedVideo.id}.mp4`
    link.click()
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-7xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-6 w-6" />
            AI Video Generation Agent
          </CardTitle>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="provider">AI Provider</Label>
              <Select value={provider} onValueChange={setProvider}>
                <SelectTrigger id="provider">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {AI_PROVIDERS.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {VIDEO_DURATIONS.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="style">Style</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {VIDEO_STYLES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="space-y-2">
                <Label htmlFor="prompt">Video Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the video you want to generate... (e.g., 'A drone shot flying over a futuristic city at sunset')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  disabled={!apiKey || isGenerating}
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || !apiKey || isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Video...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Video
                  </>
                )}
              </Button>

              {isGenerating && (
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Processing video generation...
                        </span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedVideo && (
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">Preview</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {selectedVideo.prompt}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          <Clock className="mr-1 h-3 w-3" />
                          {selectedVideo.duration}s
                        </Badge>
                        <Badge variant="secondary" className="capitalize">
                          {selectedVideo.style}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                      <video
                        ref={videoRef}
                        src={selectedVideo.url}
                        className="h-full w-full"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          onClick={togglePlayPause}
                          className="h-16 w-16 rounded-full"
                        >
                          {isPlaying ? (
                            <Pause className="h-6 w-6" />
                          ) : (
                            <Play className="h-6 w-6" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleDownload} className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download Video
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="flex-1"
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate New
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!apiKey && (
                <Card className="bg-muted/50">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <FileVideo className="text-muted-foreground mb-4 h-12 w-12" />
                    <p className="text-muted-foreground text-center text-sm">
                      Please enter your API key to start generating videos
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Generated Videos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {generatedVideos.length === 0 ? (
                    <div className="text-muted-foreground py-8 text-center text-sm">
                      No videos generated yet
                    </div>
                  ) : (
                    generatedVideos.map((video) => (
                      <Card
                        key={video.id}
                        className={`cursor-pointer transition-colors ${
                          selectedVideo?.id === video.id
                            ? "border-primary"
                            : "hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedVideo(video)}
                      >
                        <CardContent className="p-3">
                          <div className="relative mb-2 aspect-video overflow-hidden rounded">
                            <img
                              src={video.thumbnail}
                              alt={video.prompt}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs">{video.prompt}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="mr-1 h-3 w-3" />
                              {video.duration}s
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-sm">Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-2 text-xs">
                  <p>• Be specific and descriptive in your prompts</p>
                  <p>• Describe camera movements and angles</p>
                  <p>• Mention lighting and atmosphere</p>
                  <p>• Specify the mood and style you want</p>
                  <p>• Keep prompts under 500 characters</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import * as React from "react"
import {
  Download,
  ImageIcon,
  Loader2,
  Move,
  RotateCw,
  Upload,
  Wand2,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const AI_PROVIDERS = [
  { value: "openai", label: "OpenAI DALL-E" },
  { value: "stability", label: "Stability AI" },
  { value: "midjourney", label: "Midjourney" },
  { value: "google", label: "Google Imagen" },
  { value: "anthropic", label: "Anthropic" },
]

const IMAGE_SIZES = [
  { value: "1024x1024", label: "Square (1024x1024)" },
  { value: "1024x1792", label: "Portrait (1024x1792)" },
  { value: "1792x1024", label: "Landscape (1792x1024)" },
]

export default function AIImageGeneratorBlock() {
  const [prompt, setPrompt] = React.useState("")
  const [provider, setProvider] = React.useState("openai")
  const [apiKey, setApiKey] = React.useState("")
  const [imageSize, setImageSize] = React.useState("1024x1024")
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [uploadedImage, setUploadedImage] = React.useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = React.useState<string | null>(
    null
  )
  const [brightness, setBrightness] = React.useState([100])
  const [contrast, setContrast] = React.useState([100])
  const [saturation, setSaturation] = React.useState([100])
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!prompt.trim() || !apiKey) return

    setIsGenerating(true)

    // Simulate image generation
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Use a placeholder image service
    const seed = Math.floor(Math.random() * 1000)
    const [width, height] = imageSize.split("x")
    setGeneratedImage(`https://picsum.photos/seed/${seed}/${width}/${height}`)

    setIsGenerating(false)
  }

  const handleDownload = () => {
    if (!generatedImage) return
    const link = document.createElement("a")
    link.href = generatedImage
    link.download = "ai-generated-image.png"
    link.click()
  }

  const resetEditor = () => {
    setBrightness([100])
    setContrast([100])
    setSaturation([100])
  }

  const imageStyle = {
    filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%)`,
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-6xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-6 w-6" />
            AI Image Generator with Editor
          </CardTitle>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
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
              <Label htmlFor="size">Image Size</Label>
              <Select value={imageSize} onValueChange={setImageSize}>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {IMAGE_SIZES.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate">Generate</TabsTrigger>
              <TabsTrigger value="edit">Edit & Upload</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">Image Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the image you want to generate... (e.g., 'A serene landscape with mountains at sunset')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  disabled={!apiKey}
                />
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!prompt.trim() || !apiKey || isGenerating}
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Image...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Image
                  </>
                )}
              </Button>

              {generatedImage && (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-gray-100">
                    <img
                      src={generatedImage}
                      alt="Generated"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleDownload} className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleGenerate}
                      disabled={isGenerating}
                    >
                      <RotateCw className="mr-2 h-4 w-4" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              )}

              {!apiKey && (
                <p className="text-muted-foreground text-center text-sm">
                  Please enter your API key to start generating images
                </p>
              )}
            </TabsContent>

            <TabsContent value="edit" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Upload Image</Label>
                  <div className="flex gap-2">
                    <Input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Browse
                    </Button>
                  </div>
                </div>

                {(uploadedImage || generatedImage) && (
                  <div className="space-y-4">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-gray-100">
                      <img
                        src={uploadedImage || generatedImage || ""}
                        alt="Editing"
                        className="h-full w-full object-contain"
                        style={imageStyle}
                      />
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Image Editor</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label>Brightness</Label>
                            <span className="text-muted-foreground text-sm">
                              {brightness[0]}%
                            </span>
                          </div>
                          <Slider
                            value={brightness}
                            onValueChange={setBrightness}
                            min={0}
                            max={200}
                            step={1}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label>Contrast</Label>
                            <span className="text-muted-foreground text-sm">
                              {contrast[0]}%
                            </span>
                          </div>
                          <Slider
                            value={contrast}
                            onValueChange={setContrast}
                            min={0}
                            max={200}
                            step={1}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label>Saturation</Label>
                            <span className="text-muted-foreground text-sm">
                              {saturation[0]}%
                            </span>
                          </div>
                          <Slider
                            value={saturation}
                            onValueChange={setSaturation}
                            min={0}
                            max={200}
                            step={1}
                          />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={resetEditor}
                            className="flex-1"
                          >
                            Reset
                          </Button>
                          <Button onClick={handleDownload} className="flex-1">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {!uploadedImage && !generatedImage && (
                  <div className="border-muted-foreground/25 bg-muted/50 flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed">
                    <ImageIcon className="text-muted-foreground mb-4 h-12 w-12" />
                    <p className="text-muted-foreground text-sm">
                      Upload an image or generate one to start editing
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

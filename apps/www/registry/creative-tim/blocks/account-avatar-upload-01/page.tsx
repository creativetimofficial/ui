"use client"

import * as React from "react"
import {
  CheckCircle2,
  Pencil,
  Trash2,
  Upload,
  User,
  XCircle,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AccountAvatarUpload01() {
  const [status, setStatus] = React.useState("Online")
  const [avatarPreview, setAvatarPreview] = React.useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveAvatar = () => {
    setAvatarPreview(null)
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <User className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Profile Picture
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Update your profile picture and personal information
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="border-border h-16 w-16 border-2">
                  <AvatarImage
                    src={
                      avatarPreview ||
                      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                    }
                    alt="Profile Picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted-foreground/10 text-muted-foreground">
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <label
                  htmlFor="avatar-upload"
                  className="absolute right-0 bottom-0 cursor-pointer"
                >
                  <div className="bg-primary/10 text-primary hover:bg-primary/20 border-border rounded-full border p-1.5">
                    <Pencil className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type="file"
                    id="avatar-upload"
                    accept="image/png,image/jpeg,image/svg+xml"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>

              <div className="space-y-1">
                <h3 className="font-semibold">Select and Upload Image</h3>
                <p className="text-muted-foreground text-sm">
                  .svg, .png, .jpg (size 400x400px)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Avatar
              </Button>
              {avatarPreview && (
                <Button variant="destructive" onClick={handleRemoveAvatar}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <Label className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="text-muted-foreground h-4 w-4" />
              Availability Status
            </Label>
            <div className="flex items-center gap-3">
              <Switch
                id="status"
                checked={status === "Online"}
                onCheckedChange={() =>
                  setStatus((cur) => (cur === "Online" ? "Offline" : "Online"))
                }
              />
              <Label
                htmlFor="status"
                className="flex cursor-pointer items-center gap-2"
              >
                {status === "Online" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="text-muted-foreground h-4 w-4" />
                )}
                {status}
              </Label>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 mt-6 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
            <div>
              <h4 className="mb-1 text-sm font-medium">Profile Picture Tips</h4>
              <p className="text-muted-foreground text-sm">
                Choose a high-quality, professional image that clearly shows
                your face. Recommended image size is 400x400 pixels. Only .svg,
                .png, and .jpg formats are supported.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

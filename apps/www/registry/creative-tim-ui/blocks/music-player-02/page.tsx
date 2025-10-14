"use client"

import {
  AudioPlayerButton,
  AudioPlayerDuration,
  AudioPlayerProgress,
  AudioPlayerProvider,
  AudioPlayerTime,
  exampleTracks,
  useAudioPlayer,
} from "@/registry/elevenlabs-ui/ui/audio-player"
import { Card } from "@/registry/elevenlabs-ui/ui/card"

export default function Page() {
  return (
    <AudioPlayerProvider>
      <MusicPlayerDemo />
    </AudioPlayerProvider>
  )
}

const MusicPlayerDemo = () => {
  const player = useAudioPlayer<{ name: string }>()

  const track = exampleTracks[9]

  return (
    <Card className="w-full overflow-hidden p-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">
            {player.activeItem?.data?.name || track.name}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <AudioPlayerButton
            variant="outline"
            size="default"
            className="h-10 w-10 shrink-0"
            item={{
              id: track.id,
              src: track.url,
              data: track,
            }}
          />
          <div className="flex flex-1 items-center gap-2">
            <AudioPlayerTime className="text-xs tabular-nums" />
            <AudioPlayerProgress className="flex-1" />
            <AudioPlayerDuration className="text-xs tabular-nums" />
          </div>
        </div>
      </div>
    </Card>
  )
}

import { CardsActivityGoal } from "@/components/cards/activity-goal"
import { CardsBarVisualizer } from "@/components/cards/bar-visualizer"
import { CardsLiveRecording } from "@/components/cards/live-recording"
import MusicPlayer01 from "@/registry/creative-tim-ui/blocks/music-player-01/page"
import MusicPlayer02 from "@/registry/creative-tim-ui/blocks/music-player-02/page"
import SoftwarePurchase01 from "@/registry/creative-tim-ui/blocks/software-purchase-01/page"
import Speaker01 from "@/registry/creative-tim-ui/blocks/speaker-01/page"
import VoiceChat01 from "@/registry/creative-tim-ui/blocks/voice-chat-01/page"
import VoiceChat02 from "@/registry/creative-tim-ui/blocks/voice-chat-02/page"
import VoiceForm from "@/registry/creative-tim-ui/blocks/voice-form-01/page"
import ConversationDemo from "@/registry/creative-tim-ui/examples/conversation-demo"
import OrbDemo from "@/registry/creative-tim-ui/examples/orb-demo"
import VoicePickerDemo from "@/registry/creative-tim-ui/examples/voice-picker-demo"
import WaveformDemo from "@/registry/creative-tim-ui/examples/waveform-demo"
import { ConversationBar } from "@/registry/creative-tim-ui/ui/conversation-bar"

export function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid **:data-[slot=card]:shadow-none md:gap-4 lg:grid-cols-10 xl:grid-cols-11">
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <div className="grid gap-1 sm:grid-cols-[auto_1fr] md:hidden">
          <VoiceChat02 />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            {/* <CardsExerciseMinutes /> */}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <CardsBarVisualizer />
            <VoiceForm />

            <OrbDemo small />
            <VoicePickerDemo />
            <WaveformDemo />
          </div>
          <div className="flex flex-col gap-4">
            <Speaker01 />
            <div className="lg:hidden xl:block">
              <ConversationDemo />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <div className="hidden gap-1 sm:grid-cols-2 md:grid">
          <VoiceChat02 />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
            <MusicPlayer02 />
            <div className="pt-3">
              <CardsLiveRecording />
            </div>
            <div className="pt-3">
              <ConversationBar
                agentId={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!}
                className="p-0"
              />
            </div>
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <MusicPlayer01 />
          </div>
        </div>
        <div className="hidden md:block">
          <VoiceChat01 />
        </div>
        <div className="hidden lg:block xl:hidden">
          <ConversationDemo />
        </div>
        <div className="hidden lg:block xl:hidden">
          <SoftwarePurchase01 />
        </div>
      </div>
    </div>
  )
}

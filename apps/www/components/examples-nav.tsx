"use client"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/elevenlabs-ui/ui/scroll-area"

export function ExamplesNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // const pathname = usePathname()

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-[96%] md:max-w-[600px] lg:max-w-none">
        <div className="flex items-center"></div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

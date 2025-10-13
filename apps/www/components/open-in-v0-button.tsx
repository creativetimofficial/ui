import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/elevenlabs-ui/ui/button"

export function OpenInV0Button({
  name,
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  name: string
}) {
  return (
    <Button
      size="sm"
      asChild
      className={cn("h-[1.8rem] gap-1", className)}
      {...props}
    >
      <a
        href={`${process.env.NEXT_PUBLIC_V0_URL}/chat/api/open?url=${process.env.NEXT_PUBLIC_APP_URL}/r/${name}.json`}
        target="_blank"
      >
        Open in <Icons.v0 className="size-5" />
      </a>
    </Button>
  )
}

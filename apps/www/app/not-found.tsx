import Link from "next/link"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70svh] items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
            Page Not Found
          </p>
          <h1 className="font-serif text-5xl font-bold md:text-6xl">404</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Looks like this stitch was dropped. Let&apos;s get you back on
            track.
          </p>
          <Button asChild className="mt-8 rounded-full px-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}

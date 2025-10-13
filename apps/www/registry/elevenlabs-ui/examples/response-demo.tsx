"use client"

import { useEffect, useState } from "react"

import { Response } from "@/registry/elevenlabs-ui/ui/response"

const tokens = [
  "### Welcome",
  "\n\n",
  "This",
  " is",
  " a",
  " **rich",
  " markdown",
  "**",
  " showcase",
  " with",
  " multiple",
  " features.",
  "\n\n",
  "---",
  "\n\n",
  "## Data Table",
  "\n\n",
  "| Name",
  " | Role",
  " | Status",
  " |",
  "\n",
  "|------|------|--------|",
  "\n",
  "| Alice",
  " | Engineer",
  " | Active",
  " |",
  "\n",
  "| Bob",
  " | Designer",
  " | Active",
  " |",
  "\n",
  "| Carol",
  " | PM",
  " | Active",
  " |",
  "\n\n",
  "## Inspiration",
  "\n\n",
  "> *Simplicity",
  " is",
  " the",
  " ultimate",
  " sophistication.*",
  "\n",
  "> —",
  " Leonardo",
  " da",
  " Vinci",
  "\n\n",
  "## Inline",
  " and",
  " Block",
  " Code",
  "\n\n",
  "Use",
  " `let",
  " total",
  " =",
  " items.length`",
  " to",
  " count",
  " elements.",
  "\n\n",
  "```",
  "python",
  "\n",
  "def",
  " greet(name):",
  "\n",
  "    return",
  ' f"Hello, {name}!"',
  "\n",
  'print(greet("World"))',
  "\n",
  "```",
  "\n\n",
  "## Math",
  "\n\n",
  "Inline",
  " math:",
  " $a^2",
  " +",
  " b^2",
  " =",
  " c^2$",
  ".",
  "\n\n",
  "Displayed",
  " equation:",
  "\n\n",
  "$$",
  "\n",
  "\\int_0^1",
  " x^2",
  " dx",
  " =",
  " \\frac{1}{3}",
  "\n",
  "$$",
  "\n\n",
]

const Example = () => {
  const [content, setContent] = useState("")

  useEffect(() => {
    let currentContent = ""
    let index = 0

    const interval = setInterval(() => {
      if (index < tokens.length) {
        currentContent += tokens[index]
        setContent(currentContent)
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full min-h-0 w-full overflow-hidden">
      <Response className="h-full overflow-auto p-10">{content}</Response>
    </div>
  )
}

export default Example

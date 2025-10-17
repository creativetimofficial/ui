import { Command } from "commander"
import pc from "picocolors"
import prompts from "prompts"
import { existsSync } from "fs"
import fs from "fs-extra"
import path from "path"
import ora from "ora"

export const initCommand = new Command()
  .name("init")
  .description("Initialize your project with Creative Tim UI configuration")
  .option("-y, --yes", "Skip prompts and use default values")
  .option("--cwd <path>", "The working directory. Defaults to the current directory.", process.cwd())
  .action(async (opts) => {
    const cwd = path.resolve(opts.cwd || process.cwd())
    
    console.log(pc.cyan("\n┌─────────────────────────────────────────────┐"))
    console.log(pc.cyan("│  Welcome to Creative Tim UI                 │"))
    console.log(pc.cyan("└─────────────────────────────────────────────┘\n"))

    // Check if components.json exists
    const componentsJsonPath = path.resolve(cwd, "components.json")
    
    if (existsSync(componentsJsonPath) && !opts.yes) {
      const { overwrite } = await prompts({
        type: "confirm",
        name: "overwrite",
        message: "components.json already exists. Overwrite?",
        initial: false
      })

      if (!overwrite) {
        console.log(pc.yellow("Initialization cancelled."))
        return
      }
    }

    const spinner = ora("Initializing project...").start()

    try {
      // Create components.json
      const config = {
        "$schema": "https://ui.shadcn.com/schema.json",
        "style": "default",
        "rsc": true,
        "tsx": true,
        "tailwind": {
          "config": "tailwind.config.ts",
          "css": "app/globals.css",
          "baseColor": "slate",
          "cssVariables": true,
          "prefix": ""
        },
        "aliases": {
          "components": "@/components",
          "utils": "@/lib/utils",
          "ui": "@/components/ui",
          "lib": "@/lib",
          "hooks": "@/hooks"
        },
        "registry": "https://creative-tim.com/ui"
      }

      await fs.writeJSON(componentsJsonPath, config, { spaces: 2 })

      spinner.succeed("Project initialized successfully!")
      
      console.log(pc.green("\n✓ Created components.json"))
      console.log(pc.dim("\nNext steps:"))
      console.log(pc.dim("  1. Review your components.json"))
      console.log(pc.dim("  2. Run: npx @creative-tim/ui add button"))
      console.log(pc.dim("  3. Start using Creative Tim UI components!\n"))

    } catch (error) {
      spinner.fail("Failed to initialize project")
      throw error
    }
  })


import { Command } from "commander"
import pc from "picocolors"
import ora from "ora"
import path from "path"
import fs from "fs-extra"
import fetch from "node-fetch"

const REGISTRY_URL = "https://creative-tim.com/ui/r"

interface RegistryItem {
  name: string
  type: string
  files: Array<{
    path: string
    content: string
    type: string
    target?: string
  }>
  dependencies?: string[]
  registryDependencies?: string[]
}

export const addCommand = new Command()
  .name("add")
  .description("Add a component or block to your project")
  .argument("[components...]", "The components to add")
  .option("-y, --yes", "Skip confirmation prompt")
  .option("-o, --overwrite", "Overwrite existing files")
  .option("--cwd <path>", "The working directory. Defaults to the current directory.", process.cwd())
  .option("-p, --path <path>", "The path to add the component to")
  .action(async (components: string[], opts) => {
    if (!components || components.length === 0) {
      console.error(pc.red("Error: Please specify at least one component to add."))
      console.log(pc.dim("\nExample:"))
      console.log(pc.dim("  npx @creative-tim/ui add button"))
      console.log(pc.dim("  npx @creative-tim/ui add card button"))
      console.log(pc.dim("  npx @creative-tim/ui add software-purchase-01"))
      process.exit(1)
    }

    const cwd = path.resolve(opts.cwd || process.cwd())

    console.log(pc.cyan("\n📦 Adding components to your project...\n"))

    for (const component of components) {
      await addComponent(component, cwd, opts)
    }

    console.log(pc.green("\n✓ Components added successfully!\n"))
  })

async function addComponent(name: string, cwd: string, opts: any) {
  const spinner = ora(`Fetching ${pc.cyan(name)}...`).start()

  try {
    // Fetch component from registry
    const url = `${REGISTRY_URL}/${name}.json`
    const response = await fetch(url)

    if (!response.ok) {
      spinner.fail(`Component ${pc.cyan(name)} not found`)
      console.log(pc.dim(`  Tried: ${url}`))
      return
    }

    const data = await response.json() as RegistryItem

    spinner.text = `Installing ${pc.cyan(name)}...`

    // Install files
    for (const file of data.files) {
      const filePath = path.join(cwd, file.path)
      const fileDir = path.dirname(filePath)

      // Check if file exists
      if (fs.existsSync(filePath) && !opts.overwrite && !opts.yes) {
        spinner.warn(`File ${pc.dim(file.path)} already exists. Use --overwrite to replace.`)
        continue
      }

      // Create directory if it doesn't exist
      await fs.ensureDir(fileDir)

      // Write file
      await fs.writeFile(filePath, file.content, "utf-8")
    }

    // Install npm dependencies
    if (data.dependencies && data.dependencies.length > 0) {
      spinner.text = `Installing dependencies for ${pc.cyan(name)}...`
      
      const deps = data.dependencies.join(" ")
      const { execSync } = await import("child_process")
      
      try {
        execSync(`npm install ${deps}`, { cwd, stdio: "ignore" })
      } catch (error) {
        spinner.warn(`Failed to install dependencies: ${deps}`)
        console.log(pc.dim(`  Run manually: npm install ${deps}`))
      }
    }

    // Handle registry dependencies (other components)
    if (data.registryDependencies && data.registryDependencies.length > 0) {
      spinner.text = `Installing registry dependencies for ${pc.cyan(name)}...`
      
      for (const dep of data.registryDependencies) {
        await addComponent(dep, cwd, { ...opts, yes: true })
      }
    }

    spinner.succeed(`Added ${pc.cyan(name)}`)

  } catch (error: any) {
    spinner.fail(`Failed to add ${pc.cyan(name)}`)
    console.error(pc.red(`  ${error.message}`))
  }
}


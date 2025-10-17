#!/usr/bin/env node
import { Command } from "commander"
import pc from "picocolors"
import { addCommand } from "./commands/add.js"
import { initCommand } from "./commands/init.js"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read version from package.json
let packageVersion = "0.1.0"
try {
  const packageJsonPath = join(__dirname, "../package.json")
  const packageJsonContent = readFileSync(packageJsonPath, "utf-8")
  const packageJson = JSON.parse(packageJsonContent)
  packageVersion = packageJson.version
} catch (error) {
  // Fallback to default version
}

async function main() {
  const program = new Command()
    .name("creative-tim-ui")
    .description("A CLI for adding Creative Tim UI components to your project")
    .version(
      packageVersion,
      "-v, --version",
      "display the version number"
    )

  program
    .addCommand(initCommand)
    .addCommand(addCommand)

  program.parse()
}

main().catch((error) => {
  console.error(pc.red("Error:"), error.message)
  process.exit(1)
})


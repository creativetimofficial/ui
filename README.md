![elevenlabs-ui](https://github.com/user-attachments/assets/a5b73bfc-b0a3-4b4e-8915-f90a086c5723)

# II ElevenLabs UI

[ElevenLabs UI](https://ui.elevenlabs.io) is a component library built on top of [shadcn/ui](https://ui.shadcn.com/) to help you build audio & agentic applications faster.

## Overview

ElevenLabs UI provides pre-built, customizable React components specifically designed for agent & audio applications, including orbs, waveforms, voice agents, audio players, and more. 
The CLI makes it easy to add these components to your Next.js project.

## Installation
You can use the ElevenLabs Agents CLI directly with npx, or install it globally:
```bash
# Use directly (recommended)
npx @elevenlabs/agents-cli@latest components add <component-name>

# Or using shadcn cli
npx shadcn@latest add https://ui.elevenlabs.io/r/all.json
```

## Prerequisites
Before using ElevenLabs UI, ensure your Next.js project meets these requirements:
- **Node.js 18** or later
- **shadcn/ui** initialized in your project (npx shadcn@latest init)
- **Tailwind CSS** configured

## Usage

### Install All Components
Install all available ElevenLabs UI components at once:
```bash
npx @elevenlabs/agents-cli@latest components add all
```
This command will:
- Set up shadcn/ui if not already configured
- Install all ElevenLabs UI components to your configured components directory
- Add necessary dependencies to your project

### Install Specific Components
Install individual components using the `components add` command:
```bash
npx @elevenlabs/agents-cli@latest components add <component-name>
```
Examples:
```bash
# Install the orb component
npx @elevenlabs/agents-cli@latest components add orb
```

### Alternative: Use with shadcn CLI
You can also install components using the standard shadcn/ui CLI:
```bash
# Install all components
npx shadcn@latest add https://ui.elevenlabs.io/r/all.json

# Install a specific component
npx shadcn@latest add https://ui.elevenlabs.io/r/orb.json
```

All available components can be found [here](https://ui.elevenlabs.io/docs/components) or explore a list of example components [here](https://ui.elevenlabs.io/blocks).

## Contributing

If you'd like to contribute to ElevenLabs UI, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes to the components in the registry.
4. Open a PR to the main branch.

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/elevenlabs/ui/blob/main/LICENSE.md).

Engineered by [ElevenLabs](https://elevenlabs.io).

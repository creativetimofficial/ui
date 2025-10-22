![Creative Tim UI](https://raw.githubusercontent.com/creativetimofficial/ui/refs/heads/main/apps/www/public/opengraph-image.png?token=GHSAT0AAAAAADKQMYN66H6UUTMAH55OPEDI2HXPY2A)

# Creative Tim UI

[Creative Tim UI](https://creative-tim.com/ui) is a comprehensive component library built on top of [shadcn/ui](https://ui.shadcn.com/) to help you build modern web applications faster.

## Overview

Creative Tim UI provides pre-built, customizable React components and blocks designed for building beautiful, production-ready web applications. 
The CLI makes it easy to add these components to your Next.js project.

## Installation
You can use the Creative Tim UI CLI directly with npx, or install it globally:
```bash
# Use directly (recommended)
npx @creative-tim/ui@latest components add <component-name>

# Or using shadcn cli
npx shadcn@latest add https://creative-tim.com/ui/r/all.json
```

## Prerequisites
Before using Creative Tim UI, ensure your Next.js project meets these requirements:
- **Node.js 18** or later
- **shadcn/ui** initialized in your project (npx shadcn@latest init)
- **Tailwind CSS** configured

## Usage

### Install All Components
Install all available Creative Tim UI components at once:
```bash
npx @creative-tim/ui@latest components add all
```
This command will:
- Set up shadcn/ui if not already configured
- Install all Creative Tim UI components to your configured components directory
- Add necessary dependencies to your project

### Install Specific Components
Install individual components using the `components add` command:
```bash
npx @creative-tim/ui@latest components add <component-name>
```
Examples:
```bash
# Install the orb component
npx @creative-tim/ui@latest components add orb
```

### Alternative: Use with shadcn CLI
You can also install components using the standard shadcn/ui CLI:
```bash
# Install all components
npx shadcn@latest add https://creative-tim.com/ui/r/all.json

# Install a specific component
npx shadcn@latest add https://creative-tim.com/ui/r/button.json
```

All available components can be found [here](https://ui.creative-tim.com/docs/components) or explore a list of example blocks [here](https://ui.creative-tim.com/blocks).

## Contributing

If you'd like to contribute to Creative Tim UI, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes to the components in the registry.
4. Open a PR to the main branch.

Please read the [contributing guide](/CONTRIBUTING.md).

## Copyrights and Licenses

Creative Tim UI is built upon the incredible work of the open source community:

- **[shadcn/ui](https://ui.shadcn.com/)** - The documentation structure, registry system, and foundational (atomic) components are from the open source work in shadcn/ui. [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- **[Material Tailwind](https://material-tailwind.com/v3)** by Creative Tim - The blocks and component designs are inspired by and based on Material Tailwind Framework. [MIT License](https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md)
- **[Eleven Labs UI](https://github.com/elevenlabs/elevenlabs-ui)** - General inspiration for the documentation structure and approach of blocks. [MIT License](https://github.com/elevenlabs/ui/blob/main/LICENSE.md)
- **[Geist Font](https://vercel.com/font)** by Vercel - The beautiful typeface used throughout the interface. [SIL Open Font License 1.1](https://github.com/vercel/geist-font/blob/main/LICENSE.txt)

We are grateful to these projects for making their work available under open source licenses.

## License

Licensed under the [MIT license](https://github.com/creativetimofficial/ui/blob/main/LICENSE.md).

Made with love by [Creative Tim](https://creative-tim.com).

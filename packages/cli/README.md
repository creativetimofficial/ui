# @creative-tim/ui

A CLI for adding [Creative Tim UI](https://creative-tim.com/ui) components and blocks to your project.

Built by [Creative Tim](https://creative-tim.com) - Based on shadcn/ui registry system. 

## Installation

```bash
npx @creative-tim/ui@latest add button
```

## Usage

### Initialize your project

```bash
npx @creative-tim/ui@latest init
```

This creates a `components.json` file in your project with the necessary configuration.

### Add components

Add one or more components:

```bash
# Add a single component
npx @creative-tim/ui@latest add button

# Add multiple components
npx @creative-tim/ui@latest add button card dialog

# Add blocks
npx @creative-tim/ui@latest add software-purchase-01
npx @creative-tim/ui@latest add testimonials-01
```

### Options

- `-y, --yes` - Skip confirmation prompts
- `-o, --overwrite` - Overwrite existing files
- `--cwd <path>` - Specify working directory
- `-p, --path <path>` - Specify installation path

## Component Types

### UI Components

Basic building blocks:
```bash
npx @creative-tim/ui@latest add button
npx @creative-tim/ui@latest add card
npx @creative-tim/ui@latest add dialog
```

### Blocks

Pre-built sections:
```bash
npx @creative-tim/ui@latest add software-purchase-01
npx @creative-tim/ui@latest add testimonials-01
npx @creative-tim/ui@latest add web3-02
```

## Documentation

Visit [creative-tim.com/ui](https://creative-tim.com/ui/docs) for complete documentation.

## License

MIT © [Creative Tim](https://creative-tim.com)


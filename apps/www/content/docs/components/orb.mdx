---
title: Orb
description: A 3D animated orb with audio reactivity, custom colors, and agent state visualization built with Three.js.
component: true
---

<ComponentPreview
  name="orb-demo"
  title="Orb"
  description="An animated orb with flowing visuals and volume reactivity."
/>

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>

<TabsContent value="cli">

```bash
npx @elevenlabs/agents-cli@latest components add orb
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Install the following dependencies:</Step>

```bash
npm install @react-three/drei @react-three/fiber three @three/types
```

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="orb" title="components/ui/orb.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Orb } from "@/components/ui/orb"
```

```tsx showLineNumbers
<Orb />
```

## Examples

### Custom Colors

```tsx showLineNumbers
<Orb colors={["#FF6B6B", "#4ECDC4"]} />
```

### With Audio Reactivity

```tsx showLineNumbers
function AudioReactiveOrb() {
  const getInputVolume = () => {
    // Return normalized volume between 0 and 1
    return 0.5
  }

  const getOutputVolume = () => {
    // Return normalized volume between 0 and 1
    return 0.7
  }

  return (
    <Orb getInputVolume={getInputVolume} getOutputVolume={getOutputVolume} />
  )
}
```

### With Custom Seed

```tsx showLineNumbers
<Orb seed={12345} />
```

### With Agent State

```tsx showLineNumbers
const [agentState, setAgentState] = useState<"thinking" | "listening" | "talking" | null>(null)

<Orb agentState={agentState} />
```

### Manual Volume Control

```tsx showLineNumbers
const [inputVolume, setInputVolume] = useState(0.5)
const [outputVolume, setOutputVolume] = useState(0.7)

<Orb
  volumeMode="manual"
  manualInput={inputVolume}
  manualOutput={outputVolume}
/>
```

## API Reference

### Orb

A WebGL-based 3D orb component with audio reactivity and customizable appearance.

#### Props

| Prop            | Type                          | Default                  | Description                                           |
| --------------- | ----------------------------- | ------------------------ | ----------------------------------------------------- |
| colors          | `[string, string]`            | `["#CADCFC", "#A0B9D1"]` | Two color values for the gradient                     |
| colorsRef       | `RefObject<[string, string]>` | -                        | Ref for dynamic color updates                         |
| resizeDebounce  | `number`                      | `100`                    | Canvas resize debounce in ms                          |
| seed            | `number`                      | Random                   | Seed for consistent animations                        |
| agentState      | `AgentState`                  | `null`                   | Agent state: null, "thinking", "listening", "talking" |
| volumeMode      | `"auto" \| "manual"`          | `"auto"`                 | Volume control mode                                   |
| manualInput     | `number`                      | -                        | Manual input volume (0-1)                             |
| manualOutput    | `number`                      | -                        | Manual output volume (0-1)                            |
| inputVolumeRef  | `RefObject<number>`           | -                        | Ref for input volume                                  |
| outputVolumeRef | `RefObject<number>`           | -                        | Ref for output volume                                 |
| getInputVolume  | `() => number`                | -                        | Function returning input volume (0-1)                 |
| getOutputVolume | `() => number`                | -                        | Function returning output volume (0-1)                |
| className       | `string`                      | -                        | Custom CSS class                                      |

#### AgentState Type

```tsx
type AgentState = null | "thinking" | "listening" | "talking"
```

## Notes

- Built with Three.js and React Three Fiber for performant 3D rendering
- Uses WebGL shaders for smooth, fluid animations
- Audio reactivity can be controlled via functions (`getInputVolume`, `getOutputVolume`) or refs
- Agent state changes affect the orb's visual appearance and animation
- Seed prop ensures consistent animation patterns across renders
- Automatically handles canvas resizing with configurable debounce
- Colors can be updated dynamically via `colorsRef` for smooth transitions
- Performance-optimized with proper cleanup and requestAnimationFrame usage

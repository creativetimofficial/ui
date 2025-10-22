import { track } from "@vercel/analytics"

export function trackComponentInstall(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_install", {
    component: componentName,
    source: "cli",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}

export function trackComponentView(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_view", {
    component: componentName,
    source: "web",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}

export function trackComponentCopy(
  componentName: string,
  metadata?: Record<string, unknown>
) {
  track("component_copy", {
    component: componentName,
    source: "web",
    timestamp: new Date().toISOString(),
    ...metadata,
  })
}

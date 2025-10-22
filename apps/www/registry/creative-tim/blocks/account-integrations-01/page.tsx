"use client"

import * as React from "react"
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Github,
  MessageCircle,
  Shield,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const INTEGRATIONS = [
  {
    id: "github",
    name: "GitHub",
    icon: Github,
    category: "Development",
    description:
      "Connect your GitHub account to sync repositories and track contributions.",
    isConfigured: false,
    connectedEmail: null,
    verificationCode: null,
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: MessageCircle, // Replaced Spotify icon with MessageCircle
    category: "Music",
    description:
      "Link your Spotify account to share playlists and sync listening activity.",
    isConfigured: true,
    connectedEmail: "emma@mail.com",
    verificationCode: "1172913",
  },
  {
    id: "discord",
    name: "Discord",
    icon: MessageCircle,
    category: "Communication",
    description:
      "Integrate your Discord account to manage server connections and notifications.",
    isConfigured: false,
    connectedEmail: null,
    verificationCode: null,
  },
]

export default function AccountIntegrations01() {
  const [activeIntegrations, setActiveIntegrations] = React.useState<
    Record<string, boolean>
  >(
    INTEGRATIONS.reduce(
      (acc, integration) => {
        acc[integration.id] = integration.isConfigured
        return acc
      },
      {} as Record<string, boolean>
    )
  )
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null)

  const toggleIntegration = (id: string) => {
    setActiveIntegrations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const copyVerificationCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Third-Party Integrations
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Manage and configure connections to external services and
                platforms
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {INTEGRATIONS.map((integration) => {
            const Icon = integration.icon
            const isActive = activeIntegrations[integration.id]

            return (
              <AccordionItem
                key={integration.id}
                value={integration.id}
                className="border-border rounded-lg border"
              >
                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex flex-1 items-center gap-4">
                    <div className="bg-muted/50 flex h-12 w-12 items-center justify-center rounded-lg">
                      <Icon
                        className={`h-6 w-6 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                      />
                    </div>
                    <div className="flex-1 space-y-1 text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{integration.name}</h3>
                        <Badge
                          variant="outline"
                          className="text-muted-foreground"
                        >
                          {integration.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-1 text-sm">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Switch
                        id={`${integration.id}-toggle`}
                        checked={isActive}
                        onCheckedChange={() =>
                          toggleIntegration(integration.id)
                        }
                      />
                      <Label
                        htmlFor={`${integration.id}-toggle`}
                        className="cursor-pointer text-sm"
                      >
                        {isActive ? "Enabled" : "Enable"}
                      </Label>
                    </div>
                    <AccordionTrigger className="hover:bg-muted/50 rounded px-3 py-2">
                      <span className="text-sm font-medium">View More</span>
                    </AccordionTrigger>
                  </div>
                </div>
                <AccordionContent className="px-4 pb-6">
                  {!isActive ? (
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        You haven&apos;t added your {integration.name} account
                        or you aren&apos;t authorized. Click &quot;Connect&quot;
                        to initiate the integration process.
                      </p>
                      <Button>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Connect {integration.name}
                      </Button>
                    </div>
                  ) : integration.connectedEmail ? (
                    <div className="space-y-4">
                      <Card className="bg-muted/50 border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-semibold">Verification Code</h4>
                            <p className="text-muted-foreground text-sm">
                              Use this code to complete the integration
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <code className="bg-muted/50 rounded px-3 py-1 font-mono text-sm">
                              {integration.verificationCode}
                            </code>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                copyVerificationCode(
                                  integration.verificationCode!
                                )
                              }
                            >
                              {copiedCode === integration.verificationCode ? (
                                <Check className="mr-2 h-4 w-4 text-green-500" />
                              ) : (
                                <Copy className="mr-2 h-4 w-4" />
                              )}
                              {copiedCode === integration.verificationCode
                                ? "Copied"
                                : "Copy"}
                            </Button>
                          </div>
                        </div>
                      </Card>
                      <Card className="bg-muted/50 border p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-semibold">Connected Account</h4>
                            <p className="text-muted-foreground text-sm">
                              Manage your linked {integration.name} account
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium">
                              {integration.connectedEmail}
                            </span>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ) : null}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="bg-muted/50 mt-6 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 text-blue-500" />
            <div>
              <h4 className="mb-1 text-sm font-medium">Integration Security</h4>
              <p className="text-muted-foreground text-sm">
                Ensure you trust the applications you connect. Review and manage
                third-party access to your account regularly. You can revoke
                access at any time by disabling the integration.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

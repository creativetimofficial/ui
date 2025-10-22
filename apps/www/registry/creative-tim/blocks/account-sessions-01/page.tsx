"use client"

import {
  Clock,
  Computer,
  Globe,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const ACTIVE_SESSIONS = [
  {
    id: 1,
    type: "Laptop",
    icon: Computer,
    location: "New York, USA",
    coordinates: "40.7128° N, 74.0060° W",
    isCurrent: true,
    lastActive: "2 hours ago",
    browser: "Chrome 114.0",
    os: "macOS 13.4",
  },
  {
    id: 2,
    type: "Smartphone",
    icon: Smartphone,
    location: "Florida, USA",
    coordinates: "27.9944° N, 81.7603° W",
    isCurrent: false,
    lastActive: "Yesterday at 3:45 PM",
    browser: "Safari 16.5",
    os: "iOS 16.5",
  },
  {
    id: 3,
    type: "Desktop",
    icon: Computer,
    location: "Tokyo, Japan",
    coordinates: "35.6895° N, 139.6917° E",
    isCurrent: false,
    lastActive: "3 days ago",
    browser: "Firefox 112.0",
    os: "Windows 11",
  },
]

export default function AccountSessions01() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <ShieldCheck className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Active Sessions
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Manage and monitor devices that have access to your account
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {ACTIVE_SESSIONS.map((session, index) => {
            const Icon = session.icon
            const isLast = index === ACTIVE_SESSIONS.length - 1

            return (
              <div
                key={session.id}
                className={`flex items-center justify-between gap-6 py-4 ${
                  !isLast ? "border-border border-b" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`bg-muted/50 flex h-12 w-12 items-center justify-center rounded-lg`}
                  >
                    <Icon
                      className={`h-6 w-6 ${session.isCurrent ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{session.type} Session</h4>
                      {session.isCurrent && (
                        <Badge
                          variant="outline"
                          className="border-green-500 bg-green-50 text-green-700"
                        >
                          Current Session
                        </Badge>
                      )}
                    </div>

                    <div className="text-muted-foreground space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Last active: {session.lastActive}</span>
                      </div>
                      <div>
                        {session.browser} on {session.os}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {!session.isCurrent && (
                    <Button variant="destructive" size="sm">
                      <X className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-muted/50 mt-6 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-500" />
            <div>
              <h4 className="mb-1 text-sm font-medium">Security Tip</h4>
              <p className="text-muted-foreground text-sm">
                If you notice any suspicious activity, immediately remove the
                session and change your account password. Enable two-factor
                authentication for additional security.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

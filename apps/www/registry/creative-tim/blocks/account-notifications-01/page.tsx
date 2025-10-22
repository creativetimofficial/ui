"use client"

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const TABLE_HEAD = [
  { label: "Activity", icon: Bell },
  { label: "Email", icon: Mail },
  { label: "Push", icon: Smartphone },
  { label: "SMS", icon: MessageSquare },
]

const NOTIFICATIONS = [
  {
    title: "Mentions",
    description: "Notify when another user mentions you in a comment",
    category: "Social",
    email: true,
    push: false,
    sms: true,
  },
  {
    title: "Comments",
    description: "Notify when another user comments on your item",
    category: "Social",
    email: true,
    push: false,
    sms: true,
  },
  {
    title: "New Follower",
    description: "Notify when someone starts following you",
    category: "Social",
    email: false,
    push: true,
    sms: false,
  },
  {
    title: "Login Activity",
    description: "Alert when logging in from a new device or location",
    category: "Security",
    email: true,
    push: true,
    sms: true,
  },
  {
    title: "Password Changed",
    description: "Immediate notification when password is updated",
    category: "Security",
    email: true,
    push: true,
    sms: true,
  },
  {
    title: "Product Updates",
    description: "Get notified about new features and improvements",
    category: "Product",
    email: true,
    push: false,
    sms: false,
  },
]

export default function AccountNotifications01() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Notification Preferences
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Customize how you receive notifications. These settings apply to all
            activities you&apos;re monitoring across the platform.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] table-auto text-left">
            <thead>
              <tr className="border-b">
                {TABLE_HEAD.map((head, i) => {
                  const Icon = head.icon
                  return (
                    <th
                      key={head.label}
                      className={`${
                        i === 0 ? "py-4 pr-4" : "p-4 text-center"
                      } font-semibold`}
                    >
                      <div
                        className={`flex items-center gap-2 ${
                          i !== 0 ? "justify-center" : ""
                        }`}
                      >
                        <Icon className="text-muted-foreground h-4 w-4" />
                        <span className="text-sm">{head.label}</span>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {NOTIFICATIONS.map((notification, index) => {
                const isLast = index === NOTIFICATIONS.length - 1
                const classes = isLast ? "py-6" : "border-border border-b py-6"

                return (
                  <tr
                    key={notification.title}
                    className="group hover:bg-muted/50"
                  >
                    <td className={`${classes} pr-4`}>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{notification.title}</p>
                          <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
                            {notification.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {notification.description}
                        </p>
                      </div>
                    </td>
                    <td className={`${classes} px-4`}>
                      <div className="flex justify-center">
                        <Switch
                          defaultChecked={notification.email}
                          id={`email-${index}`}
                          aria-label={`Email notifications for ${notification.title}`}
                        />
                      </div>
                    </td>
                    <td className={`${classes} px-4`}>
                      <div className="flex justify-center">
                        <Switch
                          defaultChecked={notification.push}
                          id={`push-${index}`}
                          aria-label={`Push notifications for ${notification.title}`}
                        />
                      </div>
                    </td>
                    <td className={`${classes} px-4`}>
                      <div className="flex justify-center">
                        <Switch
                          defaultChecked={notification.sms}
                          id={`sms-${index}`}
                          aria-label={`SMS notifications for ${notification.title}`}
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 mt-6 rounded-lg border p-4">
          <div className="flex items-start gap-3">
            <Bell className="text-muted-foreground mt-0.5 h-5 w-5" />
            <div>
              <h4 className="mb-1 text-sm font-medium">
                About Notification Delivery
              </h4>
              <p className="text-muted-foreground text-sm">
                Email notifications are sent instantly. Push notifications
                require the mobile app. SMS notifications may incur carrier
                charges. You can change these settings at any time.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

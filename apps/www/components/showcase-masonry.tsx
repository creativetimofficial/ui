"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  Archive,
  Briefcase,
  CalendarIcon,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Github,
  Heart,
  Home,
  Mail,
  Phone,
  Quote,
  Shield,
  ShoppingBag,
  Star,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function ShowcaseMasonry() {
  const [date, setDate] = React.useState<Date>(new Date(2024, 9, 10))
  const [isFavorite, setIsFavorite] = React.useState(false)
  const [isGithubActive, setIsGithubActive] = React.useState(false)

  return (
    <section className="container py-12 md:py-20">
      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {/* Order Summary Card */}
        <div className="break-inside-avoid">
          <div className="bg-muted/30 rounded-xl border p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <ShoppingBag className="text-primary h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold">Order Summary</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-background hover:bg-muted/50 flex items-start gap-4 rounded-lg border p-3 transition-colors">
                <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                  <img
                    src="https://v3.material-tailwind.com/coat-1.png"
                    alt="Classic Suit"
                    className="h-full w-full object-cover p-1"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="leading-tight font-semibold">Classic Suit</p>
                  <p className="text-muted-foreground text-sm">Silk · Size M</p>
                  <p className="text-muted-foreground text-xs">Qty: 1</p>
                </div>
                <p className="font-semibold">$1,300</p>
              </div>
              <div className="bg-background hover:bg-muted/50 flex items-start gap-4 rounded-lg border p-3 transition-colors">
                <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                  <img
                    src="https://v3.material-tailwind.com/coat-2.png"
                    alt="Premium Suit"
                    className="h-full w-full object-cover p-1"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="leading-tight font-semibold">Premium Suit</p>
                  <p className="text-muted-foreground text-sm">
                    Linen · Size M
                  </p>
                  <p className="text-muted-foreground text-xs">Qty: 1</p>
                </div>
                <p className="font-semibold">$790</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">$2,090</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping estimate</span>
                <span className="font-medium">$0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax estimate</span>
                <span className="font-medium">$5</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold">$2,095</span>
            </div>
          </div>
        </div>

        {/* Transaction History Card */}
        <div className="break-inside-avoid">
          <div className="dark:bg-card rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold">History Transactions</h2>
                <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                  Track and monitor your financial activity.
                </p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "shrink-0 text-xs sm:text-sm",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">
                      {date ? format(date, "MMM d, yyyy") : "Select"}
                    </span>
                    <span className="sm:hidden">
                      {date ? format(date, "M/d") : "Date"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(day) => day && setDate(day)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <p className="text-muted-foreground mb-3 text-xs font-semibold sm:text-sm">
                March 2023
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-lg border p-3 sm:gap-4 sm:p-4">
                  <div className="bg-card text-card-foreground hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm sm:flex sm:h-12 sm:w-12">
                    <ChevronDown className="h-4 w-4 text-red-600 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p className="text-sm font-semibold sm:text-base">
                      Netflix
                    </p>
                    <p className="text-muted-foreground truncate text-xs sm:text-sm">
                      27 March 2026, at 12:30 PM
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-semibold text-red-600 sm:text-sm">
                    - $2,500.00
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-3 sm:gap-4 sm:p-4">
                  <div className="bg-card text-card-foreground hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm sm:flex sm:h-12 sm:w-12">
                    <ChevronUp className="h-4 w-4 text-green-600 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p className="text-sm font-semibold sm:text-base">Apple</p>
                    <p className="text-muted-foreground truncate text-xs sm:text-sm">
                      27 March 2026, at 04:30 AM
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-semibold text-green-600 sm:text-sm">
                    + $2,000.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="break-inside-avoid">
          <div className="group bg-card relative overflow-hidden rounded-lg border transition-all hover:shadow-lg">
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 z-10 bg-white dark:bg-gray-900"
            >
              Exclusive
            </Badge>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isFavorite
                    ? "fill-red-500 text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              />
            </button>

            <div className="bg-muted/30 aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=973"
                alt="Cable-knit cashmere cardigan"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="border-t p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Zegna</p>
                  <p className="text-muted-foreground mt-1 text-sm leading-tight">
                    Cable-knit cashmere cardigan
                  </p>
                </div>
              </div>
              <p className="mt-2 font-semibold">€3,450</p>
            </div>
          </div>
        </div>

        {/* Account Integration Card */}
        <div className="break-inside-avoid">
          <Card className="bg-card border p-6">
            <div className="mb-6 border-b pb-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                    Third-Party Integrations
                  </h2>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Manage and configure connections to external services
                  </p>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible defaultValue="github">
              <AccordionItem
                value="github"
                className="border-border rounded-lg border"
              >
                <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-1 items-center gap-3">
                    <div className="bg-muted/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <Github
                        className={`h-5 w-5 ${isGithubActive ? "text-primary" : "text-muted-foreground"}`}
                      />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold">GitHub</h3>
                        <Badge
                          variant="outline"
                          className="text-muted-foreground text-xs"
                        >
                          Development
                        </Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-1 text-xs">
                        Connect your GitHub account to sync repositories
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Switch
                        id="github-toggle"
                        checked={isGithubActive}
                        onCheckedChange={setIsGithubActive}
                      />
                      <Label
                        htmlFor="github-toggle"
                        className="cursor-pointer text-xs"
                      >
                        {isGithubActive ? "Enabled" : "Enable"}
                      </Label>
                    </div>
                    <AccordionTrigger className="hover:bg-muted/50 rounded p-2">
                      <span className="sr-only">Toggle details</span>
                    </AccordionTrigger>
                  </div>
                </div>
                <AccordionContent className="border-t px-4 pt-4 pb-4">
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      You haven&apos;t added your GitHub account or you
                      aren&apos;t authorized. Connect your account to enable
                      repository syncing and collaboration features.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Connect GitHub Account
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>

        {/* Order Timeline Card */}
        <div className="break-inside-avoid">
          <div className="bg-card rounded-xl border p-6">
            <h3 className="mb-6 text-lg font-semibold">Order Timeline</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary my-2 w-0.5 flex-1" />
                </div>
                <div className="pb-6">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="font-semibold">Order Placed</p>
                    <Badge
                      variant="outline"
                      className="border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                    >
                      Complete
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your order was placed on April 1, 2024
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary my-2 w-0.5 flex-1" />
                </div>
                <div className="pb-6">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="font-semibold">Order Confirmed</p>
                    <Badge
                      variant="outline"
                      className="border-green-500/30 bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                    >
                      Complete
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your order has been confirmed on April 2, 2024
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-md">
                    <Archive className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <p className="font-semibold">Order Shipped</p>
                    <Badge
                      variant="outline"
                      className="border-blue-500/30 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your order has been shipped on April 3, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="break-inside-avoid">
          <Card className="bg-card border p-6">
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold tracking-tight">
                Personal Information
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Manage your personal details
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="flex items-center gap-2"
                  >
                    <User className="text-muted-foreground h-4 w-4" />
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Emma"
                    defaultValue="Emma"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="text-muted-foreground h-4 w-4" />
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Roberts"
                    defaultValue="Roberts"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="text-muted-foreground h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="emma@mail.com"
                  defaultValue="emma@mail.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="text-muted-foreground h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 123-4567"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="profession"
                    className="flex items-center gap-2"
                  >
                    <Briefcase className="text-muted-foreground h-4 w-4" />
                    Profession
                  </Label>
                  <Select defaultValue="ui-ux">
                    <SelectTrigger id="profession">
                      <SelectValue placeholder="Select Profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ui-ux">UI/UX Designer</SelectItem>
                      <SelectItem value="frontend">
                        Frontend Developer
                      </SelectItem>
                      <SelectItem value="backend">Backend Developer</SelectItem>
                      <SelectItem value="fullstack">
                        Fullstack Developer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonial Card */}
        <div className="break-inside-avoid">
          <Card className="group border-border/50 hover:border-border transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Sarah Johnson profile"
                    className="border-border h-14 w-14 rounded-full border-2 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="bg-background absolute -right-1 -bottom-1 rounded-full p-1 shadow-md">
                    <Quote className="text-primary h-3 w-3" />
                  </div>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <p className="text-muted-foreground text-sm">
                    Product Designer
                  </p>
                </div>
                <div className="flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-muted-foreground text-left text-sm leading-relaxed">
                &quot;The attention to detail and component quality is
                outstanding. These UI blocks have significantly accelerated our
                design workflow.&quot;
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

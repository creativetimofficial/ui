"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  Briefcase,
  CalendarIcon,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
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

export default function AccountBasicInfo01() {
  const [birthDate, setBirthDate] = React.useState<Date>()

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Personal Information
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Manage your personal details and profile information. This
            information will be visible to other users on the platform.
          </p>
        </div>

        <form className="space-y-8">
          {/* Basic Details Section */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-medium">Basic Details</h3>
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
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="mb-4 text-sm font-medium">
                Professional Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="gender" className="flex items-center gap-2">
                    <User className="text-muted-foreground h-4 w-4" />
                    Gender
                  </Label>
                  <Select defaultValue="female">
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <CalendarIcon className="text-muted-foreground h-4 w-4" />
                    Birth Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {birthDate ? format(birthDate, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={birthDate}
                        onSelect={setBirthDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
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
                      <SelectItem value="product-manager">
                        Product Manager
                      </SelectItem>
                      <SelectItem value="data-scientist">
                        Data Scientist
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="education"
                    className="flex items-center gap-2"
                  >
                    <GraduationCap className="text-muted-foreground h-4 w-4" />
                    Education
                  </Label>
                  <Select defaultValue="university">
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="masters">
                        Master&apos;s Degree
                      </SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-4 text-sm font-medium">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmEmail"
                    className="flex items-center gap-2"
                  >
                    <Mail className="text-muted-foreground h-4 w-4" />
                    Confirm Email
                  </Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    placeholder="emma@mail.com"
                    defaultValue="emma@mail.com"
                  />
                </div>
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
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="text-muted-foreground h-4 w-4" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    defaultValue="Florida, USA"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="mb-4 text-sm font-medium">
                Additional Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language" className="flex items-center gap-2">
                    <Globe className="text-muted-foreground h-4 w-4" />
                    Preferred Language
                  </Label>
                  <Select defaultValue="english">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone" className="flex items-center gap-2">
                    <Globe className="text-muted-foreground h-4 w-4" />
                    Timezone
                  </Label>
                  <Select defaultValue="est">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (ET)</SelectItem>
                      <SelectItem value="cst">Central Time (CT)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t pt-6">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

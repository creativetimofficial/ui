"use client"

import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Cruds03() {
  return (
    <section className="grid min-h-screen place-items-center py-16">
      <Card className="mx-auto w-full max-w-3xl p-6 lg:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Stylist Account Settings</h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Configure your profile, roles, and permissions for your stylist
            account.
          </p>
        </div>
        <form action="#" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="avatar">Profile Photo</Label>
            <div className="flex items-center gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed">
                <Upload className="text-muted-foreground h-8 w-8" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground text-sm">
                  PNG, JPG, JPEG or GIF (max. 800x400px)
                </p>
                <Input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept=".png,.jpg,.jpeg,.gif"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" type="text" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" type="text" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input id="contactEmail" name="contactEmail" type="email" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="userRole">Role</Label>
              <Select name="userRole">
                <SelectTrigger id="userRole" className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stylist">Stylist</SelectItem>
                  <SelectItem value="store-manager">Store Manager</SelectItem>
                  <SelectItem value="creative-lead">Creative Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages</Label>
              <Input
                id="languages"
                name="languages"
                type="text"
                placeholder="e.g. English, Italian"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="e.g. Fashion Consultant"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="accountType">Account Type</Label>
              <Select name="accountType">
                <SelectTrigger id="accountType" className="w-full">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="permissionLevel">Permission Level</Label>
              <Select name="permissionLevel">
                <SelectTrigger id="permissionLevel" className="w-full">
                  <SelectValue placeholder="Select permission level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailStatus">Email Verified</Label>
              <Input
                id="emailStatus"
                name="emailStatus"
                type="text"
                value="Verified"
                disabled
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="secondary" className="flex-1">
              Upload New Photo
            </Button>
            <Button type="button" variant="destructive" className="flex-1">
              Delete Account
            </Button>
          </div>
        </form>
      </Card>
    </section>
  )
}

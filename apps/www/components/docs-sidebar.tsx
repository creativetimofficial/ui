"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { source } from "@/lib/source"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const TOP_LEVEL_SECTIONS = [
  { name: "Introduction", href: "/docs" },
  { name: "Registry", href: "/docs/registry" },
  { name: "Components", href: "/docs/components" },
  { name: "How It Works", href: "/docs/how-it-works" },
  { name: "Debug Logs", href: "/docs/debug-logs" },
]

const BLOCKS_SECTIONS = [
  { name: "Featured", href: "/blocks/featured" },
  { name: "Account", href: "/blocks/account" },
  { name: "Billing", href: "/blocks/billing" },
  { name: "Blog Sections", href: "/blocks/blog-sections" },
  { name: "Ecommerce", href: "/blocks/ecommerce" },
  { name: "FAQs", href: "/blocks/faqs" },
  { name: "Contact", href: "/blocks/contact" },
  { name: "Web3", href: "/blocks/web3" },
  { name: "CRUDs", href: "/blocks/cruds" },
  { name: "Footers", href: "/blocks/footers" },
  { name: "Testimonials", href: "/blocks/testimonials" },
  { name: "Modals", href: "/blocks/modals" },
]

const EXCLUDED_SECTIONS = ["installation", "dark-mode", "(root)"]
const EXCLUDED_PAGES: string[] = []

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname()

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        href === "/docs" || href === "/docs/components"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                      className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        {name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Blocks
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {BLOCKS_SECTIONS.map(({ name, href }) => {  
                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        href === "/blocks" || href === "/blocks/featured"
                          ? pathname === href
                          : pathname.startsWith(href)
                      }
                      className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        {name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children.map((item) => {
          if (EXCLUDED_SECTIONS.includes(item.$id ?? "")) {
            return null
          }

          return (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="text-muted-foreground font-medium">
                {item.name}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                {item.type === "folder" && (
                  <SidebarMenu className="gap-0.5">
                    {item.children.map((item) => {
                      return (
                        item.type === "page" &&
                        !EXCLUDED_PAGES.includes(item.url) && (
                          <SidebarMenuItem key={item.url}>
                            <SidebarMenuButton
                              asChild
                              isActive={item.url === pathname}
                              className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                            >
                              <Link href={item.url}>
                                <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                {item.name}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      )
                    })}
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
    </Sidebar>
  )
}

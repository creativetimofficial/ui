"use client"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Contact Information", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms & Conditions", href: "#" },
  { title: "FAQ", href: "#" },
]

export default function Footers12() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-row flex-wrap items-center !justify-center gap-6 lg:!justify-between">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map(({ title, href }, key) => (
              <li key={key}>
                <a
                  href={href}
                  className="text-foreground hover:text-primary font-semibold"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-foreground text-sm font-medium">
            All rights reserved. Copyright &copy; {YEAR} Creative Tim
          </p>
        </div>
      </div>
    </footer>
  )
}

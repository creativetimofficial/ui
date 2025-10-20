"use client"

const LINKS = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    title: "Pages",
    items: [
      { title: "Login", href: "#" },
      { title: "Register", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
    ],
  },
]

const YEAR = new Date().getFullYear()

export default function Footers11() {
  return (
    <footer className="pt-20 pb-8">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <h6 className="text-2xl font-semibold">Creative Tim</h6>
            <p className="text-muted-foreground mt-3 max-w-md">
              The reward for getting on the stage is fame.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 md:ml-auto">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-3">
                <p className="mb-3 font-semibold">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="border-border flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-center">
          <p className="text-muted-foreground max-w-2xl text-sm">
            The price of fame is you can&apos;t get off the stage.
          </p>
          <p className="text-muted-foreground text-sm whitespace-nowrap">
            &copy; {YEAR} Creative Tim. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

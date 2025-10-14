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
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="mb-6 grid grid-cols-1 justify-between gap-4 sm:grid-cols-2">
          <h6 className="mb-4 text-xl font-semibold">Creative Tim</h6>
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-2 font-semibold">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title} className="mb-1">
                    <a
                      href={href}
                      className="text-foreground hover:text-primary font-medium"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="border-surface flex flex-row flex-wrap items-end justify-between gap-x-12 gap-y-3 border-t pt-6">
          <div className="text-left">
            <p className="mb-2 text-lg font-semibold">
              The reward for getting on the stage is fame.
            </p>
            <p className="text-foreground">
              The price of fame is you can&apos;t get off the stage.
            </p>
          </div>
          <p className="text-foreground">
            &copy; {YEAR} Creative Tim. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

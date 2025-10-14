"use client"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "Company", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Team", href: "#" },
  { title: "Products", href: "#" },
  { title: "Blogs", href: "#" },
  { title: "Pricing", href: "#" },
]

export default function Footers10() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto grid place-items-center">
        <ul className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
        <p className="text-foreground">Copyright &copy; {YEAR} Creative Tim</p>
      </div>
    </footer>
  )
}

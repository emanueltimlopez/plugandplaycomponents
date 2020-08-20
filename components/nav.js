import Link from 'next/link'

const links = [
  { href: 'https://github.com/emanueltimlopez/plugandplaycomponents', label: 'GitHub' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8 flex-row-reverse">

        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}

'use client'

import { useState } from 'react'
import { NEBOSHENGLANDLogo, SearchIcon, PhoneIcon, UserIcon } from './icons'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Strategy', href: '#our-strategy' },
  { label: 'Our Roadmap 2024-2027', href: '#our-roadmap-2024-2027' },
  { label: 'Learning In Your Language', href: '#learning-in-your-language' },
  { label: 'Trusted by Professionals', href: '#trusted-by-professionals' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top navy bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 md:flex">
          <a href="#home" className="flex shrink-0 items-center gap-2">
            <NEBOSHENGLANDLogo className="h-9 w-9 text-navy-dark" />
            <span className="text-sm font-semibold tracking-wide">NEBOSHENGLAND</span>
          </a>

          {/* Desktop Search */}
          <div className="relative mx-auto hidden w-full max-w-xl md:block">
            <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search Here"
              aria-label="Search"
              className="h-10 w-full rounded-full bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Desktop Icons */}
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Call us"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
            </button>

            <span className="h-5 w-px bg-white/30" aria-hidden="true" />

            <button
              type="button"
              aria-label="Account"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10"
            >
              <UserIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-auto flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full transition hover:bg-white/10 md:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Search + Icons */}
        <div className="px-4 pb-3 md:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                className="h-10 w-full rounded-full bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <button
              type="button"
              aria-label="Call us"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Account"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition hover:bg-white/10"
            >
              <UserIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden border-b border-border bg-background md:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-x-8 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-foreground/80 transition hover:text-navy"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile collapsed nav */}
      <nav
        className={`overflow-hidden border-b border-border bg-background transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[320px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-navy"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
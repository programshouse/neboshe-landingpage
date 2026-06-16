'use client'

import { useState } from 'react'
import { NeboshLogo, SearchIcon, PhoneIcon, UserIcon } from './icons'

const NAV_ITEMS = [
  'Home',
  'About',
  'Qualification',
  'Where to study',
  'News & Events',
  'FAQ',
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top navy bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Row 1: Logo + Mobile Menu */}
          <div className="flex items-center justify-between py-3">
            <a href="#" className="flex shrink-0 items-center gap-2">
              <NeboshLogo className="h-9 w-9 text-navy-dark" />
              <span className="text-sm font-semibold tracking-wide">
                Neboshe
              </span>
            </a>

            {/* Desktop Icons */}
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                aria-label="Call us"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
              </button>

              <span
                className="h-5 w-px bg-white/30"
                aria-hidden="true"
              />

              <button
                type="button"
                aria-label="Account"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10"
              >
                <UserIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full transition hover:bg-white/10 md:hidden"
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

          {/* Row 2: Search + Icons (Mobile) */}
          <div className="flex items-center gap-2 pb-3">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                className="h-10 w-full rounded-full bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div className="flex items-center gap-2 md:hidden">
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
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-b border-border bg-background md:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-x-8 px-4 py-4 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium text-foreground/80 transition hover:text-navy"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`overflow-hidden border-b border-border bg-background transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[320px]' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-navy"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
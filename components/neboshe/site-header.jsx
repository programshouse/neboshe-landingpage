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
  return (
    <header className="w-full">
      {/* Top navy bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex shrink-0 items-center gap-2">
            <NeboshLogo className="h-9 w-9 text-navy-dark" />
            <span className="text-sm font-semibold tracking-wide">Neboshe</span>
          </a>

          <div className="relative mx-auto hidden w-full max-w-xl md:block">
            <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search Here"
              aria-label="Search"
              className="h-10 w-full rounded-full bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div className="ml-auto flex items-center gap-3 md:ml-0">
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
        </div>
      </div>

      {/* White nav row */}
      <nav className="border-b border-border bg-background">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 sm:px-6">
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
    </header>
  )
}

import { NEBOSHENGLANDLogo, ArrowRightIcon } from './icons'

const QUICK_LINKS = [
  'Find a Course',
  'Learning Partners',
  'Alumni Network',
  'Events & Webinars',
]
const RESOURCES = ['Study Guides', 'Technical Reports', 'Case Studies', 'FAQs']
const LEGAL = ['Privacy Policy', 'Terms of Use', 'Cookie Settings']

export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <NEBOSHENGLANDLogo className="h-9 w-9 text-navy-dark" />
              <span className="text-lg font-semibold">NEBOSHENGLAND</span>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/70">
              Setting the global standard in health, safety, and environmental
              education since 1979.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white text-navy transition hover:bg-white/80"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={QUICK_LINKS} />
          <FooterColumn title="Resources" links={RESOURCES} />

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold">Newsletter</h3>
            <p className="mt-4 text-xs leading-relaxed text-white/70">
              Get the latest industry updates and academic news.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="h-10 w-full rounded-md bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-blue transition hover:opacity-90"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2024 NEBOSHENGLAND. All rights reserved. Global Authority in Professional
            Education.
          </p>
          <ul className="flex flex-wrap gap-5">
            {LEGAL.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-base font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-xs text-white/70">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SOCIALS = [
  {
    label: 'YouTube',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16 3c.3 2.3 1.6 3.7 3.8 3.9v2.6c-1.3.1-2.5-.3-3.8-1v5.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3H16Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.2 3h2.9l-6.3 7.2L22 21h-5.4l-4.2-5.5L7.5 21H4.6l6.8-7.7L4 3h5.5l3.8 5 4.9-5Zm-1 16.2h1.6L8.2 4.7H6.5l10.7 14.5Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 8.5V7c0-.8.2-1.2 1.4-1.2H17V3h-2.6C11.6 3 11 4.6 11 6.8v1.7H9V12h2v9h3v-9h2.5l.5-3.5h-3Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9V9Z" />
      </svg>
    ),
  },
]

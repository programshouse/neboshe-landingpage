import { GlobeIcon, CertificateIcon, ClockIcon, HandshakeIcon } from './icons'

const STATS = [
  {
    icon: GlobeIcon,
    value: '150',
    suffix: '+',
    title: 'Countries Reached',
    caption: 'Across 6 continents',
  },
  {
    icon: CertificateIcon,
    value: '10,000',
    suffix: '+',
    title: 'Certified Graduates',
    caption: 'Every year globally',
  },
  {
    icon: ClockIcon,
    value: '50',
    suffix: '+',
    title: 'Years of Experience',
    caption: 'Since 1974',
  },
  {
    icon: HandshakeIcon,
    value: '100',
    suffix: '+',
    title: 'Learning Partners',
    caption: 'Globally accredited',
  },
]

export function TrustedStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
      <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
        Trusted by Professionals
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, suffix, title, caption }) => (
          <article
            key={title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-navy">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-4xl font-bold text-navy">
              {value}
              <span className="text-brand-blue">{suffix}</span>
            </p>
            <h3 className="mt-3 text-lg font-semibold text-navy">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

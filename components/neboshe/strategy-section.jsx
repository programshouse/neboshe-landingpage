import {
  EyeIcon,
  CompassIcon,
  GlobeIcon,
  TrendingUpIcon,
  LightbulbIcon,
  GraduationIcon,
  DevicesIcon,
  HandshakeIcon,
  NeboshLogo,
  PlayIcon,
} from './icons'

const FEATURES = [
  {
    icon: EyeIcon,
    title: 'Our Vision',
    text: 'A world where every workplace is safe, healthy and sustainable',
  },
  {
    icon: CompassIcon,
    title: 'Our Mission',
    text: 'We inspire and empower people and organizations through world class qualifications and leaving',
  },
  {
    icon: GlobeIcon,
    title: 'Global Impact',
    text: 'Trusted in 150+ countries with a global network of partners and learners making a difference',
  },
  {
    icon: TrendingUpIcon,
    title: 'Future Goals',
    text: 'Driving innovation inclusivity and excellence to shape the future of workplace safety',
  },
]

const VALUES = [
  { icon: LightbulbIcon, title: 'Innovation' },
  { icon: GlobeIcon, title: 'Global Impact' },
  { icon: GraduationIcon, title: 'Learning Excellence' },
  { icon: DevicesIcon, title: 'Digital Transformation' },
  { icon: HandshakeIcon, title: 'Partnerships' },
]

export function StrategySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <h2 className="text-3xl font-bold text-navy sm:text-4xl">Our Strategy</h2>

      {/* Feature cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-navy">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-navy">{title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* CEO message banner */}
      <CeoMessage />

      {/* Values */}
      <h2 className="mt-16 text-center text-3xl font-bold text-navy sm:text-4xl">
        Our Strategy
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map(({ icon: Icon, title }) => (
          <article
            key={title}
            className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <Icon className="mx-auto h-6 w-6 text-navy" />
            <h3 className="mt-3 text-base font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              We embrace innovation to create contemporary, relevant and
              impactful qualifications.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CeoMessage() {
  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl bg-accent lg:grid-cols-2">
      {/* Left: portrait + text */}
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative w-full max-w-[140px] shrink-0 self-stretch sm:w-36">
          <img
            src="/images/graduate.png"
            alt="NEBOSHE chief executive in graduation cap and gown"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="px-2 py-6 pr-6 sm:py-8">
          <h3 className="text-lg font-bold text-navy">
            A message from our chief exclusive
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Our 2024 - 2027 Strategy is built on collaboration, innovation and a
            deep commitment to our global community. Together, we will continue
            to raise standards and developers the skills needed to create safer,
            healthier workplaces for all.
          </p>
          <button
            type="button"
            className="mt-6 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-navy-dark"
          >
            Watch Full Message
          </button>
        </div>
      </div>

      {/* Right: strategy video card */}
      <div className="relative min-h-56 overflow-hidden">
        <img
          src="/images/strategy-banner.png"
          alt="Construction workers on site at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />
        <div className="relative flex h-full items-center gap-5 px-6 py-8 sm:px-8">
          <div className="flex flex-col items-center text-primary-foreground">
            <NeboshLogo className="h-16 w-16 text-navy-dark" />
            <span className="mt-1 text-xs font-bold tracking-widest">
              NEBOSHE
            </span>
          </div>
          <div className="text-primary-foreground">
            <p className="text-xl font-bold leading-tight sm:text-2xl">
              NEBOSHE Strategy
              <br />
              <span className="text-2xl sm:text-3xl">2024-2027</span>
            </p>
            <p className="mt-1 text-sm text-white/80">
              Developing our potentiale
            </p>
          </div>
          <button
            type="button"
            aria-label="Play strategy video"
            className="ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 ring-2 ring-white/40 transition hover:bg-white/25"
          >
            <PlayIcon className="h-5 w-5 translate-x-0.5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}

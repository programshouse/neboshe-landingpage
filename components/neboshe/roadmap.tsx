const MILESTONES = [
  {
    year: '2024',
    text: 'Strengthen our foundation and enhance the learner experience.',
  },
  {
    year: '2025',
    text: 'Expand global reach and digital capabilities.',
  },
  {
    year: '2026',
    text: 'Drive innovation and build opportunities for impact.',
  },
  {
    year: '2027',
    text: 'Achieve excellence and create lasting value worldwide.',
  },
]

export function Roadmap() {
  return (
    <section className="bg-navy py-14 text-primary-foreground lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Our Roadmap 2024-2027
        </h2>

        <div className="relative mt-12">
          {/* horizontal line with arrow (desktop) */}
          <div className="absolute left-0 right-0 top-[68px] hidden items-center md:flex">
            <span className="h-2 w-2 rotate-45 bg-white/50" />
            <span className="h-px flex-1 bg-white/50" />
            <svg
              className="h-3 w-3 text-white/80"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 0l12 6-12 6 3-6z" />
            </svg>
          </div>

          <ol className="grid gap-10 md:grid-cols-4 md:gap-4">
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-xl font-semibold">{m.year}</span>
                <span className="my-3 grid h-6 w-6 place-items-center rounded-full bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy" />
                </span>
                <p className="max-w-[14rem] text-xs leading-relaxed text-white/75">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

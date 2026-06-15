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
    <section className="bg-[#082c75] py-[22px] text-white lg:py-[28px]">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <h2 className="text-center text-[32px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[36px]">
          Our Roadmap 2024-2027
        </h2>

        <div className="relative mt-[34px]">
          <div className="absolute left-[44px] right-[30px] top-[37px] hidden items-center md:flex">
            <span className="h-[10px] w-[10px] rotate-45 bg-white/70" />
            <span className="h-[4px] flex-1 bg-white/80" />
            <svg
              className="h-[16px] w-[16px] text-white"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 0l12 6-12 6 3-6z" />
            </svg>
          </div>

          <ol className="grid gap-10 md:grid-cols-4 md:gap-0">
            {MILESTONES.map((m) => (
              <li
                key={m.year}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[16px] font-semibold leading-none text-white">
                  {m.year}
                </span>

                <span className="my-[14px] grid h-[31px] w-[31px] place-items-center rounded-full bg-white">
                  <span className="h-[17px] w-[17px] rounded-full bg-[#082c75]" />
                </span>

                <p className="max-w-[116px] text-[8px] font-medium leading-[1.35] text-white">
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
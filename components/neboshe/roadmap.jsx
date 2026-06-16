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
    <section className="bg-[#082c75] py-8 text-white lg:py-10">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6">
        <h2 className="text-center text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[30px] lg:text-[36px]">
          Our Roadmap 2024-2027
        </h2>

        <div className="relative mt-8">
          <div className="absolute left-[16px] right-[16px] top-[27px] flex items-center sm:left-[28px] sm:right-[24px] sm:top-[30px] lg:left-[44px] lg:right-[30px] lg:top-[37px]">
            <span className="h-[7px] w-[7px] rotate-45 bg-white/70 sm:h-[8px] sm:w-[8px] lg:h-[10px] lg:w-[10px]" />

            <span className="h-[3px] flex-1 bg-white/80 lg:h-[4px]" />

            <svg
              className="h-[12px] w-[12px] text-white lg:h-[16px] lg:w-[16px]"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 0l12 6-12 6 3-6z" />
            </svg>
          </div>

          <ol className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-0">
            {MILESTONES.map((m) => (
              <li
                key={m.year}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[11px] font-semibold leading-none text-white sm:text-[14px] lg:text-[16px]">
                  {m.year}
                </span>

                <span className="my-3 grid h-[22px] w-[22px] place-items-center rounded-full bg-white sm:h-[26px] sm:w-[26px] lg:my-[14px] lg:h-[31px] lg:w-[31px]">
                  <span className="h-[12px] w-[12px] rounded-full bg-[#082c75] sm:h-[14px] sm:w-[14px] lg:h-[17px] lg:w-[17px]" />
                </span>

                <p className="max-w-[72px] text-[6px] font-medium leading-[1.35] text-white sm:max-w-[95px] sm:text-[7px] lg:max-w-[116px] lg:text-[8px]">
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
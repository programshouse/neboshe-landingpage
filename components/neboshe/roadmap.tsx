const MILESTONES = [
  {
    year: '2024',
    text: 'Strengthen our foundation and enhance the learner experience.',
  },
  {
    year: '2025',
    text: 'Expand global reach and digital capabilities',
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
    <section className="bg-[#082c75] py-[28px] text-white">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="text-center text-[32px] font-semibold leading-none tracking-[-0.03em]">
          Our Roadmap 2024-2027
        </h2>

        <div className="relative mx-auto mt-[34px] h-[128px] max-w-[835px]">
          <div className="absolute left-[2px] right-[4px] top-[35px] flex items-center">
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

          <ol className="relative grid grid-cols-4">
            {MILESTONES.map((item, index) => (
              <li
                key={item.year}
                className="relative flex flex-col"
                style={{
                  paddingLeft:
                    index === 0
                      ? '126px'
                      : index === 1
                        ? '104px'
                        : index === 2
                          ? '92px'
                          : '78px',
                }}
              >
                <span className="text-[16px] font-semibold leading-none">
                  {item.year}
                </span>

                <span className="mt-[15px] grid h-[31px] w-[31px] place-items-center rounded-full bg-white">
                  <span className="h-[17px] w-[17px] rounded-full bg-[#082c75]" />
                </span>

                <p className="mt-[14px] max-w-[116px] text-[10px] font-medium leading-[1.35] text-white">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
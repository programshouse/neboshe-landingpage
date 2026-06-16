import { ArrowRightIcon } from './icons'

const heroImages = [
  {
    src: '/images/image 15.png',
    alt: 'Graduate taking a selfie at a ceremony',
  },
  {
    src: '/images/image 16.png',
    alt: 'Industrial safety worker wearing protective equipment',
  },
  {
    src: '/images/image 19 (1).png',
    alt: 'NEBOSH safety representative in a high visibility vest',
  },
]

export function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid min-h-[258px] grid-cols-1 lg:grid-cols-[34%_66%]">
        {/* Left Content */}
        <div className="relative flex min-h-[258px] bg-[#082c75] px-[26px] py-[20px] text-white">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0a3a91 0%, #082c75 55%, #051d4e 100%)',
            }}
          />

          <div className="relative flex w-full flex-col justify-center pr-[18px]">
            <span className="inline-flex w-fit items-center gap-[6px] rounded-full bg-white px-[14px] py-[7px] text-[12px] font-semibold leading-none text-[#082c75]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#082c75]" />
              2024–2027 Strategy
            </span>

            <h1 className="mt-[18px] text-[31px] font-semibold leading-[1.35] tracking-[-0.03em] text-white">
              Developing Our Potential
            </h1>

            <p className="mt-[10px] max-w-[95%] text-[15px] font-normal leading-[1.65] text-white/95">
              Our strategy empowers people and organizations worldwide to build
              safer, healthier and more sustainable workplaces
            </p>

            <div className="mt-[18px] flex items-center gap-[16px]">
              <ApplyButton variant="light" />
              <ApplyButton variant="outline" />
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid min-h-[258px] grid-cols-3 overflow-hidden">
          {heroImages.map((image) => (
            <div
              key={image.src}
              className="relative min-h-[258px] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplyButton({ variant = 'light' }) {
  const isLight = variant === 'light'

  return (
    <button
      type="button"
      className={`group inline-flex h-[30px] items-center justify-center gap-[8px] rounded-[4px] px-[22px] text-[14px] font-medium transition ${
        isLight
          ? 'bg-white text-[#082c75] hover:bg-white/90'
          : 'bg-transparent text-white ring-1 ring-white/70 hover:bg-white/10'
      }`}
    >
      Apply Now

      <ArrowRightIcon className="h-[12px] w-[12px] transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}
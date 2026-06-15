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
    <section className="relative w-full overflow-hidden bg-white">
      <div className="grid min-h-[260px] grid-cols-[32.5%_67.5%]">
        <div className="relative z-10 flex min-h-[260px] bg-[#082c75] px-[26px] py-4 text-white">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #0b3585 0%, #082c75 55%, #061f55 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex max-w-[330px] flex-col justify-center">
            <span className="inline-flex h-[20px] w-fit items-center gap-[6px] rounded-full bg-[#eaf7ff] px-[12px] text-[11px] font-bold leading-none text-[#082c75]">
              <span className="h-[4px] w-[4px] rounded-full bg-[#082c75]" />
              2024-2027 Strategy
            </span>

            <h1 className="mt-[22px] max-w-[320px] text-[36px] font-semibold leading-[1.52] tracking-[-0.035em] text-white">
              Developing Our
              <br />
              Potential
            </h1>

            <p className="mt-[8px] max-w-[315px] text-[16px] font-medium leading-[1.35] tracking-[-0.01em] text-white">
              Our strategy empowers people and organizations worldwide to build
              safer , healthier and more sustainable workplaces
            </p>

            <div className="mt-[10px] flex items-center gap-[14px]">
              <ApplyButton variant="light" />
              <ApplyButton variant="outline" />
            </div>
          </div>
        </div>

        <div className="grid min-h-[260px] grid-cols-3 overflow-hidden">
          {heroImages.map((image) => (
            <div key={image.src} className="relative min-h-[260px] overflow-hidden">
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
      className={`group inline-flex h-[29px] min-w-[110px] items-center justify-center gap-[8px] rounded-[4px] px-[16px] text-[13px] font-semibold leading-none transition ${
        isLight
          ? 'bg-[#eaf7ff] text-[#082c75] hover:bg-white'
          : 'border border-white/70 bg-transparent text-white hover:bg-white/10'
      }`}
    >
      Apply Now
      <ArrowRightIcon className="h-[12px] w-[12px] transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}
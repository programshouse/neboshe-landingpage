import { ArrowRightIcon } from './icons'

const heroImages = [
  {
    src: '/images/image 15.png',
    alt: 'Graduate taking a selfie at a ceremony',
    className: 'object-[center_center]',
  },
  {
    src: '/images/image 16.png',
    alt: 'Industrial safety worker wearing protective equipment',
    className: 'object-[center_center]',
  },
  {
    src: '/images/image 19 (1).png',
    alt: 'NEBOSH safety representative in a high visibility vest',
    className: 'object-[center_center]',
  },
]

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="grid min-h-[250px] lg:grid-cols-[32.5%_67.5%]">
        {/* Left navy panel */}
        <div className="relative z-10 flex bg-[#082c75] px-5 py-5 text-white sm:px-7 lg:min-h-[250px] lg:px-7 lg:py-5">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(10, 58, 145, 0.9) 0%, rgba(8, 44, 117, 1) 58%, rgba(5, 29, 78, 1) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex max-w-[360px] flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold leading-none text-[#082c75] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#082c75]" />
              2024-2027 Strategy
            </span>

            <h1 className="mt-4 max-w-[320px] text-[30px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[34px] lg:text-[36px]">
              Developing Our Potential
            </h1>

            <p className="mt-3 max-w-[295px] text-[11px] font-normal leading-[1.45] text-white/90">
              Our strategy empowers people and organizations worldwide to build
              safer, healthier and more sustainable workplaces
            </p>

            <div className="mt-5 flex items-center gap-3">
              <ApplyButton variant="light" />
              <ApplyButton variant="outline" />
            </div>
          </div>
        </div>

        {/* Right image collage */}
        <div className="grid min-h-[250px] grid-cols-[34%_33%_33%] overflow-hidden lg:min-h-[250px]">
          {heroImages.map((image) => (
            <div key={image.src} className="relative min-h-[250px] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className={`h-full w-full object-cover ${image.className}`}
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
      className={`group inline-flex h-8 items-center gap-2 rounded-[3px] px-3 text-[10px] font-semibold transition ${
        isLight
          ? 'bg-white text-[#082c75] hover:bg-white/90'
          : 'bg-transparent text-white ring-1 ring-white/80 hover:bg-white/10'
      }`}
    >
      Apply Now
      <span
        className={`grid h-4 w-4 place-items-center rounded-full transition ${
          isLight
            ? 'bg-[#082c75] text-white group-hover:bg-[#061f54]'
            : 'bg-white/10 text-white'
        }`}
      >
        <ArrowRightIcon className="h-2.5 w-2.5" />
      </span>
    </button>
  )
}

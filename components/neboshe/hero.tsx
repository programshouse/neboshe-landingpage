import { ArrowRightIcon } from './icons'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left navy panel */}
        <div className="relative bg-navy px-6 py-12 text-primary-foreground sm:px-10 lg:py-16">
          {/* subtle radial accent */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(120% 80% at 0% 0%, oklch(0.45 0.14 262) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-xl lg:ml-auto lg:mr-0 lg:max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              2024-2027 Strategy
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Developing Our Potential
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Our strategy empowers people and organizations worldwide to build
              safer, healthier and more sustainable workplaces
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ApplyButton variant="light" />
              <ApplyButton variant="outline" />
            </div>
          </div>
        </div>

        {/* Right image collage */}
        <div className="relative min-h-64 lg:min-h-0">
          <img
            src="/images/hero-collage.png"
            alt="Graduates celebrating, an industrial worker in a hard hat, and workers in high-visibility safety vests"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function ApplyButton({ variant }: { variant: 'light' | 'outline' }) {
  const isLight = variant === 'light'
  return (
    <button
      type="button"
      className={`group inline-flex items-center gap-3 rounded-md px-5 py-2.5 text-sm font-semibold transition ${
        isLight
          ? 'bg-background text-navy hover:bg-white/90'
          : 'bg-white/10 text-primary-foreground ring-1 ring-white/30 hover:bg-white/20'
      }`}
    >
      Apply Now
      <span
        className={`grid h-6 w-6 place-items-center rounded-full ${
          isLight ? 'bg-navy text-primary-foreground' : 'bg-white/20'
        }`}
      >
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
    </button>
  )
}

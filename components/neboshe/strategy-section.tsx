import type { ComponentType, SVGProps } from 'react'
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

type Icon = ComponentType<SVGProps<SVGSVGElement>>

const FEATURES: { icon: Icon; title: string; text: string }[] = [
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

const VALUES: { icon: Icon; title: string }[] = [
  { icon: LightbulbIcon, title: 'Innovation' },
  { icon: GlobeIcon, title: 'Global Impact' },
  { icon: GraduationIcon, title: 'Learning Excellence' },
  { icon: DevicesIcon, title: 'Digital Transformation' },
  { icon: HandshakeIcon, title: 'Partnerships' },
]

export function StrategySection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:py-16">
      <h2 className="text-3xl font-bold text-navy sm:text-4xl">Our Strategy</h2>

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

      <CeoMessage />

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
    <div className="mt-8 grid min-h-[200px] overflow-hidden rounded-[10px] bg-[#e9eef6] lg:grid-cols-[58.5%_41.5%]">
      <div className="flex min-h-[200px]">
        <div className="relative w-[155px] shrink-0">
          <img
            src="/images/graduate.png"
            alt="NEBOSHE chief executive in graduation cap and gown"
            className="absolute bottom-0 left-4 h-[182px] w-[128px] object-contain object-bottom"
          />
        </div>

        <div className="flex flex-col justify-center py-5 pr-8">
          <h3 className="text-[21px] font-bold leading-[1.2] tracking-[-0.02em] text-[#082c75]">
            A message from our chief exclusive
          </h3>

          <p className="mt-[10px] max-w-[485px] text-[11px] font-medium leading-[1.45] tracking-[0.01em] text-[#4b5563]">
            Our 2024 - 2027 Strategy is built on collaboration , innovation and a
            deep commitment to our global community. Together, we will continue
            to raise standards and developers the skills needed to create safer ,
            healthier workplace for all.
          </p>

          <button
            type="button"
            className="mt-[22px] h-[30px] w-fit rounded-[4px] bg-[#082c75] px-[14px] text-[11px] font-semibold leading-none text-white transition hover:bg-[#061f55]"
          >
            Watch Full Message
          </button>
        </div>
      </div>

      <div className="flex min-h-[182px] items-center justify-center bg-[#062765] p-[10px]">
        <div className="relative h-full min-h-[162px] w-full overflow-hidden rounded-[8px] bg-[#082c75]">
          <img
            src="/images/strategy-banner.png"
            alt="Construction workers on site at dusk"
            className="absolute inset-0 h-full w-full object-cover"
          />



          <div className="relative flex h-full items-center px-[22px] py-5 text-white">
   



            <button
              type="button"
              aria-label="Play strategy video"
              className="ml-auto grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#062765]/80 ring-[4px] ring-white transition hover:bg-[#062765]"
            >
              <PlayIcon className="h-[18px] w-[18px] translate-x-[2px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
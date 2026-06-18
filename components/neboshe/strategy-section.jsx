import React from 'react'
import {
  EyeIcon,
  CompassIcon,
  GlobeIcon,
  TrendingUpIcon,
  LightbulbIcon,
  GraduationIcon,
  DevicesIcon,
  HandshakeIcon,
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
    text: 'We inspire and empower people and organizations through world class qualifications and learning',
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
    <section
      id="our-strategy"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-16"
    >
      <h2 className="text-center text-[28px] font-bold text-navy sm:text-left sm:text-4xl">
        Our Strategy
      </h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-navy">
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

      <h2 className="mt-14 text-center text-[28px] font-bold text-navy sm:mt-16 sm:text-4xl">
        Our Strategy
      </h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
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
    <div className="mt-12 overflow-hidden rounded-[10px] bg-[#e9eef6] lg:mt-18 lg:grid lg:min-h-[200px] lg:grid-cols-[58.5%_41.5%]">
      <div className="relative flex flex-col px-5 pt-7 sm:min-h-[280px] sm:flex-row sm:px-7 sm:pt-0 lg:min-h-[200px] lg:px-0">
        <div className="order-2 mt-5 flex justify-center sm:order-1 sm:mt-0 sm:w-[210px] sm:shrink-0 sm:items-end lg:w-[155px]">
          <img
            src="/images/graduate.png"
            alt="Chief Executive"
            className="h-[210px] w-auto object-contain object-bottom sm:h-[255px] lg:h-[182px]"
          />
        </div>

        <div className="order-1 flex flex-col justify-center text-center sm:order-2 sm:flex-1 sm:py-6 sm:pr-8 sm:text-left lg:py-5">
          <h3 className="text-[25px] font-bold leading-[1.12] tracking-[-0.02em] text-[#082c75] sm:text-[30px] lg:text-[21px]">
            A message from our chief executive
          </h3>

          <p className="mt-3 text-[13px] font-medium leading-[1.55] text-[#1f2f46] sm:max-w-[520px] lg:mt-[10px] lg:text-[11px] lg:leading-[1.45]">
            Our 2024 - 2027 Strategy is built on collaboration, innovation and a
            deep commitment to our global community. Together, we will continue
            to raise standards and develop the skills needed to create safer,
            healthier workplaces for all.
          </p>

          <button
            type="button"
            className="mx-auto mt-5 h-[34px] w-fit rounded-[4px] bg-[#082c75] px-5 text-[12px] font-semibold leading-none text-white transition hover:bg-[#061f55] sm:mx-0 lg:mt-[22px] lg:h-[30px] lg:px-[14px] lg:text-[11px]"
          >
            Watch Full Message
          </button>
        </div>
      </div>

      <div className="flex min-h-[180px] items-center justify-center bg-[#062765] p-[10px] sm:min-h-[220px] lg:min-h-[182px]">
        <div className="relative h-full min-h-[165px] w-full overflow-hidden rounded-[8px] bg-[#082c75] sm:min-h-[200px] lg:min-h-[162px]">
          <img
            src="/images/strategy-banner.png"
            alt="Strategy Banner"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#082c75]/70" />

          <div className="relative flex h-full min-h-[165px] items-center justify-center px-6 py-5 text-white sm:min-h-[200px] lg:min-h-[162px] lg:justify-end">
            <button
              type="button"
              aria-label="Play strategy video"
              className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#062765]/80 ring-[4px] ring-white transition hover:bg-[#062765] lg:h-[46px] lg:w-[46px]"
            >
              <PlayIcon className="h-[18px] w-[18px] translate-x-[2px] text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
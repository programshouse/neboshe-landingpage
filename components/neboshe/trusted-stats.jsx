'use client'

import { useEffect, useRef, useState } from 'react'
import { GlobeIcon, CertificateIcon, ClockIcon, HandshakeIcon } from './icons'

const STATS = [
  {
    icon: GlobeIcon,
    value: 150,
    suffix: '+',
    title: 'Countries Reached',
    caption: 'Across 6 continents',
  },
  {
    icon: CertificateIcon,
    value: 10000,
    suffix: '+',
    title: 'Certified Graduates',
    caption: 'Every year globally',
  },
  {
    icon: ClockIcon,
    value: 50,
    suffix: '+',
    title: 'Years of Experience',
    caption: 'Since 1974',
  },
  {
    icon: HandshakeIcon,
    value: 100,
    suffix: '+',
    title: 'Learning Partners',
    caption: 'Globally accredited',
  },
]

function CountUp({ end }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return

        started = true

        const duration = 1400
        const startTime = performance.now()

        const animate = time => {
          const progress = Math.min((time - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)

          setCount(Math.floor(eased * end))

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(end)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function TrustedStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-7">
      <h2 className="text-center text-[32px] font-bold leading-tight text-[#06142F]">
        Trusted by Professionals
      </h2>

      <div className="mt-8 grid gap-[38px] sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, suffix, title, caption }) => (
          <article
            key={title}
            className="min-h-[182px] rounded-[8px] border border-[#E1E1E1] bg-white px-7 py-6"
          >
            <span className="grid h-[28px] w-[28px] place-items-center rounded-[4px] bg-[#EEF1F6] text-[#00358E]">
              <Icon className="h-[20px] w-[20px]" />
            </span>

            <p className="mt-3 text-[34px] font-bold leading-none tracking-[-0.03em] text-[#06142F]">
              <CountUp end={value} />
              <span className="ml-[2px] text-[17px] font-bold text-[#00358E]">
                {suffix}
              </span>
            </p>

            <h3 className="mt-4 text-[19px] font-semibold leading-tight text-[#06142F]">
              {title}
            </h3>

            <p className="mt-2 text-[16px] font-normal leading-tight text-[#696969]">
              {caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
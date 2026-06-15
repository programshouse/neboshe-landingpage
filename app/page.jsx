import { SiteHeader } from '../components/neboshe/site-header'
import { Hero } from '../components/neboshe/hero'
import { StrategySection } from '../components/neboshe/strategy-section'
import { Roadmap } from '../components/neboshe/roadmap'
import { LearningLanguages } from '../components/neboshe/learning-languages'
import { TrustedStats } from '../components/neboshe/trusted-stats'
import { SiteFooter } from '../components/neboshe/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StrategySection />
      <Roadmap />
      <LearningLanguages />
      <TrustedStats />
      <SiteFooter />
    </main>
  )
}

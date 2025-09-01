import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import StatisticsSection from '@/components/StatisticsSection'
import HighlightsSection from '@/components/HighlightsSection'
import DonationCTA from '@/components/DonationCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatisticsSection />
      <HighlightsSection />
      <DonationCTA />
    </div>
  )
}

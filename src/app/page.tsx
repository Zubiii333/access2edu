import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MissionsSection from '@/components/MissionsSection'
import StatisticsSection from '@/components/StatisticsSection'
import HighlightsSection from '@/components/HighlightsSection'
import DonationCTA from '@/components/DonationCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionsSection />
      <StatisticsSection />
      <HighlightsSection />
      <DonationCTA />
      <Footer />
    </div>
  )
}

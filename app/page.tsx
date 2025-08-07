import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/ui/hero-section-dark"
import { FeaturesSection } from "@/components/ui/features-section"
import { AISection } from "@/components/ui/ai-section"
import { DashboardSection } from "@/components/ui/dashboard-section"
import { QuickActions } from "@/components/ui/quick-actions"
import { HowItWorks } from "@/components/ui/how-it-works"
import { Testimonials } from "@/components/ui/testimonials"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroSection 
        title="Smart Logistics for Delhi's Industrial Hubs"
        subtitle={{
          regular: "Revolutionizing last-mile delivery with ",
          gradient: "AI-powered logistics intelligence."
        }}
        description="IntelliChain connects MSMEs, transporters, and warehouses through intelligent route optimization, shared logistics, and real-time tracking across Okhla, Patparganj, Bawana, Narela, and Mayapuri industrial zones."
        ctaText="Start Your Journey"
        ctaHref="#features"
        bottomImage={{
          light: "https://farmui.vercel.app/dashboard-light.png",
          dark: "https://farmui.vercel.app/dashboard.png"
        }}
        gridOptions={{
          angle: 65,
          cellSize: 60,
          opacity: 0.3,
          lightLineColor: "rgba(120,119,198,0.2)",
          darkLineColor: "rgba(120,119,198,0.4)"
        }}
      />

      <FeaturesSection />
      
      <AISection 
        id="ai-tools"
        title="AI-Powered Logistics Intelligence"
        subtitle="Advanced algorithms solving complex supply chain challenges across Delhi's industrial ecosystem"
      />

      <DashboardSection />

      <QuickActions />
      
      <HowItWorks />

      <Testimonials />
      
      <Footer />
    </main>
  )
}
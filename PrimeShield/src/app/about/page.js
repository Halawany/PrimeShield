import Navbar from '@/components/common/Navbar/NavbarWrapper'
import AboutCardsSection from '@/components/sections/AboutCards/AboutCardsSection'
import AboutHeroSection from '@/components/sections/AboutHero/AboutHeroSection'
import AboutTabsSection from '@/components/sections/AboutTabs/AboutTabsSection'
import AboutVisionMissionSection from '@/components/sections/AboutVisionMission/AboutVisionMissionSection'
import ClientsSection from '@/components/sections/Clients/ClientsSection'
import CTASection from '@/components/sections/CTA/CTASection'
import Footer from '@/components/sections/Footer/Footer'
import PartnershipSection from '@/components/sections/Partnership/PartnershipSection'
import ProjectsSection from '@/components/sections/Projects/ProjectsSection'
import ServicesSection from '@/components/sections/Service/ServiceSection'
import Styles from './page.module.css'
import React from 'react'
import AboutWrapper from '@/components/sections/AboutWrapper/AboutWrapper'

export default function AboutPage() {
  return (
    <main className={Styles.section}>
      <Navbar/>
      <AboutHeroSection />
      <AboutTabsSection />
      <AboutVisionMissionSection />
      <ServicesSection />
      <AboutWrapper/>
      <Footer/>
    </main>
  )
}

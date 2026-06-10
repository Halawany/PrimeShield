import AboutVisionMain from "@/components/AboutVisionMain/AboutVisionMain";
import Navbar from "@/components/common/Navbar/NavbarWrapper";
import AboutSection from "@/components/sections/About/AboutSection";
import AboutVisionMissionSection from "@/components/sections/AboutVisionMission/AboutVisionMissionSection";
import ApprovalsSection from "@/components/sections/Approvals/ApprovalsSection";
import ClientsSection from "@/components/sections/Clients/ClientsSection";
import ClientsResultsSection from "@/components/sections/ClientsResults/ClientsResultsSection";
import CTASection from "@/components/sections/CTA/CTASection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import PartnershipSection from "@/components/sections/Partnership/PartnershipSection";
import ProjectsSection from "@/components/sections/Projects/ProjectsSection";
import ProjectsApprovalsSection from "@/components/sections/ProjectsApprovals/ProjectsApprovalsSection";
import ResultsSection from "@/components/sections/Results/ResultsSection";
import ServicesSection from "@/components/sections/Service/ServiceSection";
import VisionSection from "@/components/sections/Vision/VisionSection";
import styles from './page.module.css'

async function getWagtailPage() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WAGTAIL_API_URL || 'http://127.0.0.1:8000/api/v2';
    const res = await fetch(`${apiUrl}/pages/?type=home.HomePage&fields=body`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error("Failed to fetch Wagtail page");
      return null;
    }
    const data = await res.json();
    if (data && data.items && data.items.length > 0) {
      return data.items[0];
    }

  } catch (error) {
    console.error("Error fetching Wagtail data:", error);
  }
  return null;
}

export default async function HomePage() {
  const pageData = await getWagtailPage();
  const heroBlock = pageData?.body?.find((block) => block.type === 'hero')?.value;
  const aboutBlock = pageData?.body?.find((block) => block.type === 'about')?.value;
  const visionBlock = pageData?.body?.find((block) => block.type === 'vision')?.value;
  const servicesBlock = pageData?.body?.find((block) => block.type === 'services')?.value;

  return (
    <main className={styles.section}>
      <Navbar/>
      <HeroSection data={heroBlock} />
      {/* <AboutVisionMain/> */}
      <AboutSection data={aboutBlock} />
      <VisionSection data={visionBlock} />
      <ServicesSection data={servicesBlock} />
      <ClientsResultsSection />
      <ProjectsApprovalsSection/>
      <PartnershipSection />
      <CTASection />
      <FAQSection />
      <Footer/>
    </main>
  );
}

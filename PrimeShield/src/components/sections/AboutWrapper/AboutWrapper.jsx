import React from 'react'
import styles from './AboutWrapper.module.css'
import ProjectsSection from '../Projects/ProjectsSection';
import ClientsSection from '../Clients/ClientsSection';
import AboutCardsSection from '../AboutCards/AboutCardsSection';
import CTASection from '../CTA/CTASection';
import CompanyProfile from '../CompanyProfile/CompanyProfile';

export default function AboutWrapper() {
  return (
    <section className={styles.section}>
      <ProjectsSection />
      <ClientsSection />
      <AboutCardsSection />
      <CompanyProfile/>
      <CTASection />
    </section>
  );
}

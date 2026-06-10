import React from 'react'
import FAQSection from '../FAQ/FAQSection'
import CTASection from '../CTA/CTASection'
import styles from './ServicesWrapper.module.css'

export default function ServicesWrapper() {
  return (
    <section className={styles.section}>
      <FAQSection />
      <CTASection/>
    </section>
  )
}

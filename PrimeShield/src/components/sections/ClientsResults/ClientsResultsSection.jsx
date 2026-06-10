import React from 'react'
import ClientsSection from '../Clients/ClientsSection'
import ResultsSection from '../Results/ResultsSection'
import styles from './ClientsResultsSection.module.css'

export default function ClientsResultsSection() {
  return (
    <div className={styles.section}>
      <ClientsSection />
      <ResultsSection />
    </div>
  );
}

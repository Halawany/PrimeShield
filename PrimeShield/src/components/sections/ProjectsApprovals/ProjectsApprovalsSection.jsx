import React from 'react'
import styles from './ProjectsApprovalsSection.module.css'
import ProjectsSection from '../Projects/ProjectsSection'
import ApprovalsSection from '../Approvals/ApprovalsSection'


export default function ProjectsApprovalsSection() {
  return (
    <div className={styles.section}>
      <ProjectsSection />
      <ApprovalsSection/>
    </div>
  )
}

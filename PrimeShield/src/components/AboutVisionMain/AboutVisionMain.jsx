import React from 'react'
import AboutSection from '../sections/About/AboutSection'
import VisionSection from '../sections/Vision/VisionSection'
import Styles from './AboutVisionMain.module.css'

export default function AboutVisionMain() {
  return (
    <section className={Styles.section}>
      <AboutSection />
      <VisionSection/>
    </section>
  )
}

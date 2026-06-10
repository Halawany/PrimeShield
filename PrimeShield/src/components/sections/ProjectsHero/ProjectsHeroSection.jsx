"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./ProjectsHeroSection.module.css";

export default function ProjectsHeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Background cinematic motion
      tl.fromTo(
        `.${styles.hero}`,
        { scale: 1.08 },
        { scale: 1, duration: 2.2 },
      );

      // Overlay fade
      tl.fromTo(
        `.${styles.overlay}`,
        { opacity: 0.7 },
        { opacity: 0.4, duration: 1.6 },
        0,
      );

      // Title
      tl.fromTo(
        ".hero-title",
        { y: 40, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
        0.6,
      );

      // Description
      tl.fromTo(
        ".hero-desc",
        { y: 30, opacity: 0, filter: "blur(4px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
        0.9,
      );

      // 🔥 Scroll Arrow animation (زي الهوم)
      tl.fromTo(
        ".hero-arrow",
        { y: 20, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        1.3,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} hero-title`}>
            سجل إنجازات يعكس قوة التنفيذ <br /> ودقة المعايير
          </h1>

          <p className={`${styles.description} hero-desc`}>
            نفذنا مشاريع كبرى في{" "}
            <span className={styles.highlight}>
              القطاعات السكنية، الفندقية، التجارية والصناعية
            </span>
            ، بمساحات ضخمة ومعايير دقيقة تؤكد قدرتنا على إدارة وتنفيذ الأعمال
            بكفاءة عالية.
          </p>

          {/* 🔥 Scroll Down Arrow */}
          <div
            className={`${styles.scrollDown} hero-arrow`}
            onClick={() => {
              const nextSection = heroRef.current.nextElementSibling;
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <i className="fa-solid fa-angles-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

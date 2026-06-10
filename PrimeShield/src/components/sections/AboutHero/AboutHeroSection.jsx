"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AboutHeroSection.module.css";

export default function AboutHeroSection() {
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
        { opacity: 0.85 },
        { opacity: 0.65, duration: 1.6 },
        0,
      );

      // Title
      tl.fromTo(
        ".hero-title",
        {
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
        },
        0.6,
      );

      // Description
      tl.fromTo(
        ".hero-desc",
        {
          y: 30,
          opacity: 0,
          filter: "blur(4px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        0.9,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.overlay} />

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <h1 className={`hero-title ${styles.title}`}>
            خبرة هندسية تمتد لعقود في حماية المباني
            <br />
            وتعزيز استدامتها
          </h1>

          <p className={`hero-desc ${styles.description}`}>
            نحن في برايم شيلد
            <span className={styles.highlight}>
              {" "}
              نجمع بين خبرة تتجاوز 40 عامًا في المقاولات العامة و12 عامًا{" "}
            </span>
            من التخصص الدقيق في أنظمة العزل المتقدمة، لنقدم حلولًا موثوقة تحمي
            استثمارات عملائنا في جميع أنحاء المملكة.
          </p>

          <div
            className={styles.scrollDown}
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

"use client";

import { useEffect, useRef } from "react";
import styles from "./ResultsSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResultsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray(`.${styles.number}`);

      numbers.forEach((el) => {
        const target = Number(el.getAttribute("data-target"));

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
            onUpdate: function () {
              const value = Math.floor(this.targets()[0].innerText);
              const prefix = el.getAttribute("data-prefix") || "";
              const suffix = el.getAttribute("data-suffix") || "";

              el.innerText = prefix + value.toLocaleString() + suffix;
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.results}>
      <div className="container">
        <h2 className={styles.title}>نتائجنا</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.number} data-target="40" data-prefix="+">
              +0
            </h3>
            <p className={styles.text}>سنة خبرة في المقاولات العامة</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.number} data-target="12" data-prefix="+">
              +0
            </h3>
            <p className={styles.text}>سنة تخصص دقيق في حلول العزل</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.number} data-target="100" data-suffix="%">
              0%
            </h3>
            <p className={styles.text}>توطين (نطاق أخضر – فئة أ)</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.number} data-target="44000" data-suffix=" م²">
              0 م²
            </h3>
            <p className={styles.text}>
              مساحة عزل في مشروع واحد (واجهة الرياض)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ data }) {
  const sectionRef = useRef(null);

  const title = data?.title || "من نحن";
  const descriptionRaw = data?.description || "تأسست شركة برايم شيلد لتكون المحـور الأساسي الذي يلتقــي فيــــــــه الابتكــار الهندسي بالتميز الإنشائي. نحن لا نبنـــــــــــي مجــــــــــرد هيـــــــــــاكل، بل نصيغ مستقبلاً يتصدره الإتقان؛ حيث نضع معايير الجودة الفائقة والتفــوق المهــــــــني فــي طليعــة أولوياتنــــا، مستنـــــــديــن في ذلــــــك إلى خبراتنـــــــا العميــقــــــة وفــريــقنـــــا الــــــذي يقـــــــــدم حلـــــــولاً احتـــــــرافيــــــة متكـــــــــاملــــــــة";

  const stripHtml = (html) => html?.replace(/<[^>]+>/g, '') || '';
  const cleanDescription = data?.description ? stripHtml(data.description) : descriptionRaw;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%", // ⬅️ مدى أطول
          scrub: 1.2, // ⬅️ سموذي وبطيء
        },
        defaults: {
          ease: "power3.out",
        },
      });

      // 1️⃣ Title – أبطأ وأعمق
      tl.fromTo(
        ".about-title",
        {
          y: 80, // ⬅️ مسافة أكبر
          opacity: 0,
          filter: "blur(10px)", // ⬅️ blur أوضح
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.8, // ⬅️ أبطأ
        },
      );

      // 2️⃣ Paragraph – ورا العنوان بشوية
      tl.fromTo(
        ".about-text",
        {
          y: 60,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2.2, // ⬅️ بطيييء
        },
        0.8, // ⬅️ يدخل متأخر شوية
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="About" ref={sectionRef} className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={`${styles.title} about-title`}>{title}</h2>

          <p className={`${styles.text} about-text`}>
            {cleanDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

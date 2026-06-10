"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VisionSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const DEFAULT_SLIDES = [
  {
    title: "رؤيتنا",
    text: "أن نكون الخيار الأول في المملكة لحلول العزل الهندسي المتقدمة، من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.",
    image_path: "/assets/vision_result.webp",
  },
  {
    title: "رسالتنا",
    text: "تقديم حلول عزل هندسية متطورة تحمي المنشآت وتطيل عمرها الافتراضي، مع ضمان الشفافية والالتزام بالمواعيد.",
    image_path: "/assets/vision-2_result.webp",
  },
  {
    title: "مهمتنا",
    text: "بناء شراكات طويلة الأمد مع عملائنا عبر خدمات استشارية ودعم فني متواصل باستخدام مواد معتمدة عالميًا.",
    image_path: "/assets/vision-3_result.webp",
  },
];

export default function VisionSection({ data }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);

  const slides = data?.slides?.length > 0 ? data.slides : DEFAULT_SLIDES;

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);


  // 🔁 auto switching
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  return (
    <section ref={sectionRef} className={styles.vision}>
      <div className="container">
        <div className={styles.wrapper}>
          {slides.map((slide, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                className={`${styles.slide} ${isActive ? styles.active : ""}`}
                style={{ backgroundImage: `url(${slide.image_path})` }}
                onMouseEnter={() => isActive && setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className={styles.overlay} />

                <div className={styles.infoBox}>
                  <h3 className={styles.title}>{slide.title}</h3>
                  <p className={styles.text}>{slide.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

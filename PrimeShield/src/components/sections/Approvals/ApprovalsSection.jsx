"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ApprovalsSection.module.css";

const CERTIFICATES = [
  {
    title: "شهادة اعتماد تطبيق أنظمة العزل المائي",
    image: "/assets/cert-1_result.webp",
  },
  { title: "شهادة شراكة استراتيجية", image: "/assets/cert-2_result.webp" },
  { title: "شهادة جودة وتنفيذ", image: "/assets/cert-3_result.webp" },
  { title: "شهادة تميز هندسي", image: "/assets/cert-4_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-5_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-6_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-7_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-8_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-9_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-10_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-13_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-14_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-15_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-16_result.webp" },
  { title: "شهادة اعتماد دولي", image: "/assets/cert-17_result.webp" },
];

export default function ApprovalsSection() {
  const [active, setActive] = useState(1);
  const intervalRef = useRef(null);

  const leftIndex = (active - 1 + CERTIFICATES.length) % CERTIFICATES.length;
  const rightIndex = (active + 1) % CERTIFICATES.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % CERTIFICATES.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);



  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>الشهادات</h2>

        <div className={styles.wrapper}>
          {CERTIFICATES.map((cert, i) => {
            let position = styles.hidden;

            if (i === active) position = styles.active;
            else if (i === leftIndex) position = styles.left;
            else if (i === rightIndex) position = styles.right;

            return (
              <div
                key={i}
                className={`${styles.card} ${position}`}
                onClick={() => {
                  setActive(i);
                  clearInterval(intervalRef.current);

                  intervalRef.current = setInterval(() => {
                    setActive((prev) => (prev + 1) % CERTIFICATES.length);
                  }, 4000);
                }}
              >
                {/* الصورة */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.image}
                />

                {/* overlay */}
                {/* <div className={styles.overlay} /> */}

                {/* المحتوى */}
                {/* <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{cert.title}</h3>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        {/* <div className={styles.dots}>
          {CERTIFICATES.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === active ? styles.activeDot : ""
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./ProjectsSection.module.css";

const PROJECTS = [
  {
    title: " واجهة الرياض للمعارض والمؤتمرات",
    image: "/assets/project-11_result.webp",
  },
  {
    title: "منتجع نوفا الرياض، راديسون كوليكشن",
    image: "/assets/project-4_result.webp",
  },
  {
    title: "مشروع فندق إنتركونتيننتال – أبها",
    image: "/assets/project-2_result.webp",
  },
  {
    title: "مشروع seven مدينة تبوك",
    image: "/assets/project-23.png",
  },
  {
    title: " مشروع بيات هيلز – حي الصفا",
    image: "/assets/project-6_result.webp",
  },
  { title: "GH220 CALMA Project", image: "/assets/project-1_result.webp" },
  {
    title: "فندق ارفاد الربيع - ERFAD AlRabie Hotel",
    image: "/assets/project-5_result.webp",
  },
  { title: "فندق صبا", image: "/assets/project-3_result.webp" },
  { title: "مشروع وهله", image: "/assets/project-7_result.webp" },
  { title: "قصر الشيخ الضويان", image: "/assets/project-8_result.webp" },
  {
    title: "مشروعات شركة دار بيات للتطوير والاستثمار",
    image: "/assets/project-9_result.webp",
  },
  {
    title: "شاليهات كان cannes chalets",
    image: "/assets/project-10_result.webp",
  },
  { title: "مشروع الخيلاء بلازا", image: "/assets/project-12_result.webp" },
  { title: "مبني الاحوال المدنية", image: "/assets/project-13_result.webp" },
  {
    title: "مشروعات شركة مشيد للتطوير والاستثمار",
    image: "/assets/project-14_result.webp",
  },
  {
    title: "شاليهات كان cannes chalets",
    image: "/assets/project-15_result.webp",
  },
  { title: "مشروع فن المكاتب", image: "/assets/project-16_result.webp" },
  {
    title: "مدارس الفرسان العالمية، الرياض",
    image: "/assets/project-17_result.webp",
  },
  { title: "مشروع مهد الرياضة", image: "/assets/project-18_result.webp" },
  {
    title: "مشروع ش خالد الماجد الملقا",
    image: "/assets/project-19_result.webp",
  },
  { title: " العثيم مول ", image: "/assets/project-20_result.webp" },
  {
    title: "شركة الراجحي للصناعة والتجارة",
    image: "/assets/project-21_result.webp",
  },
  {
    title: "شركة بالانس بلس للتطوير والاستثمار العقاري",
    image: "/assets/project-22.png",
  },
  { title: "GH220 CALMA Project", image: "/assets/project-1_result.webp" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  // 🔁 Auto switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>مشاريعنا المميزة</h2>

        <div className={styles.projectCard}>
          <img
            key={active}
            src={PROJECTS[active].image}
            alt={PROJECTS[active].title}
            className={styles.image}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h3 className={styles.projectTitle}>
              {PROJECTS[active].title}
              <span className={styles.line}></span>
            </h3>
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className={styles.dots}>
          {PROJECTS.map((_, i) => (
            <span
              key={i}
              className={i === active ? styles.activeDot : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import styles from "./CTASection.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function CTASection() {
    const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
    const isHome = pathname === "/";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.title}>
            ابدأ حماية منشأتك اليوم بثقة هندسية عالية
          </h2>

          <p className={styles.subtitle}>
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>

          <button className={styles.button} onClick={() => setOpenModal(true)}>
            تواصل معنا
            <i className="fa-solid fa-headset"></i>{" "}
          </button>
          <ContactModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>
    </section>
  );
}

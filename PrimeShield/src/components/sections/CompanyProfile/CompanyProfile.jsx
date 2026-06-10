"use client";

import { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import styles from "./CompanyProfile.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CompanyProfile() {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const isHome = pathname === "/";

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.title}>الملف التعريفي للشركة</h2>

          <p className={styles.subtitle}>
            تعرف على خبرات برايم شيلد ومشاريعنا من خلال الملف التعريفي للشركة
          </p>

          <a
            className={styles.button}
            download
            href="./assets/companyProfile_compressed.pdf"
          >
            تحميل الملف
            <i className="fa-solid fa-download"></i>{" "}
          </a>
          <ContactModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>
    </section>
  );
}

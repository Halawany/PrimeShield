"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQS = [
  {
    question: "ما هي أنواع العزل التي تقدمونها ؟",
    answer:
      "نقدم مجموعة متكاملة من حلول العزل تشمل: العزل المائي، العزل الحراري، العزل الإسمنتي، أنظمة البولي يوريثان، وأنظمة الإيبوكسي للأرضيات والخزانات، بما يتناسب مع طبيعة كل مشروع سواء سكني أو تجاري أو صناعي.",
  },
  {
    question: "هل المواد الي تستخدمونها معتمدة ؟",
    answer:
      "نعم، نستخدم مواد عزل معتمدة ومطابقة للمواصفات السعودية والخليجية، ويتم اختيارها بعناية لضمان أعلى مستويات الجودة والمتانة، بما يتناسب مع طبيعة المناخ في المملكة.",
  },
  {
    question: "كيف تتعاملون مع مشاكل التشققات و الشروخ ؟",
    answer:
      "نقوم أولًا بفحص دقيق لتحديد سبب التشققات، ثم نستخدم أنظمة المعالجة المناسبة مثل الحقن بمواد متخصصة أو المعالجة الكريستالية لضمان سد الشروخ بشكل فعال ومنع تكرار المشكلة مستقبلاً.",
  },
  {
    question: "ماهي مدة الضمان علي أعمال العزل ؟",
    answer:
      "نوفر ضمانًا على أعمال العزل يختلف حسب نوع النظام المستخدم وطبيعة المشروع، ويتم توضيح مدة الضمان بشكل رسمي ضمن العقد لضمان الشفافية وراحة العميل.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>الأسئلة الشائعة</h2>

        <div className={styles.accordion}>
          {FAQS.map((item, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`${styles.answerWrapper} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

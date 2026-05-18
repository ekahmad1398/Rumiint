import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function FAQPage() {
  const { t } = useLanguage()
  const items = t('faq.items')
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            align="center"
            description={t('faq.description')}
            eyebrow={t('faq.eyebrow')}
            title={t('faq.title')}
          />
        </Reveal>

        <Stagger className="mt-10 space-y-4" delayChildren={0.04} staggerChildren={0.05}>
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <Reveal key={item.question} distance={16}>
                <article className="surface-card overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-lg font-extrabold">{item.question}</span>
                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <motion.div
                    animate={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0.7 }}
                    className="grid"
                    initial={false}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-8" style={{ color: 'var(--text-soft)' }}>
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </article>
              </Reveal>
            )
          })}
        </Stagger>
      </section>
    </div>
  )
}

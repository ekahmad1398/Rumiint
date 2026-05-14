import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function FAQPage() {
  const { t } = useLanguage()
  const items = t('faq.items')
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="page-enter px-4 pb-8 pt-10">
      <section className="mx-auto max-w-5xl">
        <SectionHeading
          align="center"
          description={t('faq.description')}
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
        />

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article key={item.question} className="surface-card overflow-hidden">
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
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="px-6 pb-6 text-sm leading-8"
                      style={{ color: 'var(--text-soft)' }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { FiChevronDown } from 'react-icons/fi'

import { Reveal, Stagger } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

export default function FAQPage() {
  const { t } = useLanguage()
  const items = t('faq.items')
  const [openItem, setOpenItem] = useState('item-0')

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

        <Accordion.Root
          collapsible
          className="mt-10"
          type="single"
          value={openItem}
          onValueChange={setOpenItem}
        >
          <Stagger className="space-y-4" delayChildren={0.04} staggerChildren={0.05}>
            {items.map((item, index) => {
              const itemValue = `item-${index}`
              const isOpen = openItem === itemValue

              return (
                <Reveal key={item.question} distance={16}>
                  <Accordion.Item
                    className="surface-card faq-item overflow-hidden"
                    value={itemValue}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="faq-trigger flex w-full items-center justify-between gap-4 px-6 py-5 text-start">
                        <span className="text-lg font-extrabold">{item.question}</span>
                        <FiChevronDown
                          className={`faq-chevron h-5 w-5 shrink-0 ${isOpen ? 'faq-chevron-open' : ''}`}
                        />
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className="faq-content">
                      <div className="faq-content-inner px-6 pb-6">
                        <p className="text-sm leading-8" style={{ color: 'var(--text-soft)' }}>
                          {item.answer}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Reveal>
              )
            })}
          </Stagger>
        </Accordion.Root>
      </section>
    </div>
  )
}

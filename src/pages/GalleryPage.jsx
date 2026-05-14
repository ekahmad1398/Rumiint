import { useState } from 'react'

import Lightbox from '../components/Lightbox'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

const ratioClasses = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
}

function getRatioClass(ratio = 'portrait') {
  return ratioClasses[ratio] ?? ratioClasses.portrait
}

export default function GalleryPage() {
  const { t } = useLanguage()
  const items = t('gallery.items')
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="page-enter px-4 pb-14 pt-10">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          description={t('gallery.description')}
          eyebrow={t('gallery.eyebrow')}
          title={t('gallery.title')}
        />

        <div className="gallery-panel mt-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {items.map((item, index) => (
              <button
                key={item.src}
                aria-label={item.caption}
                className={`surface-card gallery-card group flex h-full flex-col text-start ${
                  index < 10 ? 'gallery-card-animated' : ''
                }`}
                onClick={() => setSelectedItem(item)}
                style={index < 10 ? { animationDelay: `${index * 40}ms` } : undefined}
                type="button"
              >
                <div className="p-3 pb-0">
                  <div className={`gallery-frame ${getRatioClass(item.ratio)}`}>
                    <img
                      alt={item.alt}
                      className="gallery-photo h-full w-full object-cover"
                      loading="lazy"
                      src={item.src}
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <p className="text-base font-extrabold leading-7 md:text-lg">{item.caption}</p>
                  <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                    {item.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}

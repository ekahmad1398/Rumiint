import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import Lightbox from '../components/Lightbox'
import OptimizedImage from '../components/OptimizedImage'
import { Reveal } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../contexts/LanguageContext'

const ratioClasses = {
  portrait: 'aspect-auto sm:aspect-[4/5]',
  square: 'aspect-auto sm:aspect-square',
  landscape: 'aspect-auto sm:aspect-[4/3]',
  wide: 'aspect-auto sm:aspect-[16/10]',
}

function getRatioClass(ratio = 'portrait') {
  return ratioClasses[ratio] ?? ratioClasses.portrait
}

function getColumnCount(width) {
  if (width >= 1536) {
    return 4
  }

  if (width >= 1280) {
    return 3
  }

  if (width >= 640) {
    return 2
  }

  return 1
}

function getInitialCount(columns) {
  return columns * 6
}

function getStepCount(columns) {
  return columns * 3
}

export default function GalleryPage() {
  const { t } = useLanguage()
  const items = t('gallery.items')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [columnCount, setColumnCount] = useState(() =>
    typeof window === 'undefined' ? 3 : getColumnCount(window.innerWidth),
  )
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window === 'undefined' ? 18 : getInitialCount(getColumnCount(window.innerWidth)),
  )

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount(window.innerWidth))
    }

    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const categories = [
    { key: 'all', label: t('common.all') },
    ...items.reduce((collection, item) => {
      if (collection.some((entry) => entry.key === item.categoryKey)) {
        return collection
      }

      return [...collection, { key: item.categoryKey, label: item.category }]
    }, []),
  ]

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.categoryKey === activeCategory)

  useEffect(() => {
    setVisibleCount(Math.min(filteredItems.length, getInitialCount(columnCount)))
  }, [activeCategory, columnCount, filteredItems.length])

  useEffect(() => {
    if (selectedIndex == null) {
      return
    }

    if (!filteredItems[selectedIndex]) {
      setSelectedIndex(null)
    }
  }, [filteredItems, selectedIndex])

  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  return (
    <div className="page-enter px-4 pb-14 pt-10">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="center"
            description={t('gallery.description')}
            eyebrow={t('gallery.eyebrow')}
            title={t('gallery.title')}
          />
        </Reveal>

        <Reveal delay={0.04} distance={18}>
          <div className="gallery-panel mt-10">
            <div className="gallery-toolbar flex flex-col gap-4 border-b pb-5 md:flex-row md:items-center md:justify-between" style={{ borderColor: 'var(--border)' }}>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>
                {t('gallery.toolbarNote')}
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`gallery-filter-pill ${
                      activeCategory === category.key ? 'gallery-filter-pill-active' : ''
                    }`}
                    onClick={() => setActiveCategory(category.key)}
                    type="button"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {visibleItems.map((item, index) => (
                <button
                  key={item.src}
                  aria-label={item.caption}
                  className={`surface-card gallery-card group flex h-full flex-col text-start ${
                    index < columnCount * 2 ? 'gallery-card-animated' : ''
                  }`}
                  onClick={() => setSelectedIndex(index)}
                  style={
                    index < columnCount * 2
                      ? { animationDelay: `${index * 35}ms` }
                      : undefined
                  }
                  type="button"
                >
                    <div className="p-3 pb-0">
                      <div className={`gallery-frame ${getRatioClass(item.ratio)}`}>
                        <OptimizedImage
                          alt={item.alt}
                          className="gallery-photo h-auto w-full object-cover sm:h-full"
                          sizes="(min-width: 1536px) 23vw, (min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
                          src={item.src}
                          style={{ objectPosition: item.position }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                      <span className="gallery-category-pill">{item.category}</span>
                      <p className="mt-3 text-base font-extrabold leading-7 md:text-lg">{item.caption}</p>
                      <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
                        {item.description}
                      </p>
                    </div>
                </button>
              ))}
            </div>

            {hasMore ? (
              <div className="mt-8 flex justify-center">
                <button
                  className="secondary-button gap-2"
                  onClick={() =>
                    setVisibleCount((currentValue) =>
                      Math.min(filteredItems.length, currentValue + getStepCount(columnCount)),
                    )
                  }
                  type="button"
                >
                  {t('gallery.seeMore')}
                  <FiChevronDown className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
        </Reveal>
      </section>

      <Lightbox
        items={filteredItems}
        onClose={() => setSelectedIndex(null)}
        onNext={() =>
          setSelectedIndex((currentValue) =>
            currentValue == null ? 0 : (currentValue + 1) % filteredItems.length,
          )
        }
        onPrevious={() =>
          setSelectedIndex((currentValue) =>
            currentValue == null
              ? filteredItems.length - 1
              : (currentValue - 1 + filteredItems.length) % filteredItems.length,
          )
        }
        selectedIndex={selectedIndex}
      />
    </div>
  )
}

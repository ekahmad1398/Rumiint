import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

import OptimizedImage from './OptimizedImage'
import { useLanguage } from '../contexts/LanguageContext'

export default function Lightbox({ items = [], selectedIndex, onClose, onNext, onPrevious }) {
  const { t } = useLanguage()
  const shellRef = useRef(null)
  const touchStartX = useRef(0)
  const item = selectedIndex == null ? null : items[selectedIndex]

  useEffect(() => {
    if (!item) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }

      if (event.key === 'ArrowLeft') {
        onPrevious()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onNext, onPrevious])

  useEffect(() => {
    if (!item || !shellRef.current) {
      return
    }

    shellRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [item])

  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {item ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-modal="true"
          className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/84 p-3 backdrop-blur-md sm:p-4 md:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              ref={shellRef}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="lightbox-shell relative my-2 w-full max-w-6xl overflow-y-auto rounded-[32px] border md:my-4"
              exit={{ opacity: 0, scale: 0.97, y: 18 }}
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              style={{
                borderColor: 'var(--border)',
                maxHeight: 'calc(100dvh - 1.5rem)',
              }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              onTouchEnd={(event) => {
                const delta = event.changedTouches[0].clientX - touchStartX.current

                if (Math.abs(delta) < 50) {
                  return
                }

                if (delta < 0) {
                  onNext()
                } else {
                  onPrevious()
                }
              }}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0].clientX
              }}
            >
              <button
                aria-label={t('common.close')}
                className="icon-button absolute end-4 top-4 z-20"
                onClick={onClose}
                type="button"
              >
                <FiX />
              </button>

              {items.length > 1 ? (
                <>
                  <button
                    aria-label={t('common.previous')}
                    className="lightbox-nav-button absolute start-4 top-1/2 z-20 -translate-y-1/2"
                    onClick={onPrevious}
                    type="button"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    aria-label={t('common.next')}
                    className="lightbox-nav-button absolute end-4 top-1/2 z-20 -translate-y-1/2"
                    onClick={onNext}
                    type="button"
                  >
                    <FiChevronRight />
                  </button>
                </>
              ) : null}

              <div className="lightbox-image-shell px-4 pb-2 pt-16 md:px-6">
                <OptimizedImage
                  alt={item.alt}
                  className="max-h-[72dvh] w-full rounded-[24px] object-contain"
                  loading="eager"
                  priority
                  src={item.src}
                />
              </div>

              <div className="border-t px-5 py-5 md:px-6" style={{ borderColor: 'var(--border)' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="gallery-category-pill">{item.category}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-soft)' }}>
                    {selectedIndex + 1} / {items.length}
                  </span>
                </div>
                <p className="mt-4 text-xl font-black md:text-2xl">{item.caption}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 md:text-base" style={{ color: 'var(--text-soft)' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

import { useLanguage } from '../contexts/LanguageContext'

export default function Lightbox({ item, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (!item) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [item, onClose])

  if (!item) {
    return null
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] border bg-white shadow-2xl dark:bg-slate-950"
        onClick={(event) => event.stopPropagation()}
        style={{ borderColor: 'var(--border)' }}
      >
        <button
          aria-label={t('common.close')}
          className="icon-button absolute end-4 top-4 z-10"
          onClick={onClose}
          type="button"
        >
          <FiX />
        </button>
        <img
          alt={item.alt}
          className="max-h-[78vh] w-full object-contain bg-slate-100 dark:bg-slate-900"
          src={item.src}
        />
        <div className="px-6 py-5">
          <p className="text-lg font-bold">{item.caption}</p>
          <p className="mt-2 text-sm leading-7" style={{ color: 'var(--text-soft)' }}>
            {item.alt}
          </p>
        </div>
      </div>
    </div>
  )
}

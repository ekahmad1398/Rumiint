import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { routes } from '../siteConfig'

const defaultKnownRoutes = Object.values(routes)

function normalizePath(pathname = routes.home) {
  if (!pathname) {
    return routes.home
  }

  const cleanPath = pathname.split('?')[0].split('#')[0]

  if (cleanPath !== routes.home && cleanPath.endsWith('/')) {
    return cleanPath.slice(0, -1)
  }

  return cleanPath || routes.home
}

function isKnownRoute(pathname, knownRoutes) {
  const normalizedPath = normalizePath(pathname)
  return knownRoutes.map(normalizePath).includes(normalizedPath)
}

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(() => {
    if (typeof navigator === 'undefined') {
      return true
    }

    return navigator.onLine
  })

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

function resolveFallbackType({ type, isOnline, pathname, knownRoutes }) {
  if (type === 'offline' || type === 'not-found' || type === 'error') {
    return type
  }

  if (!isOnline) {
    return 'offline'
  }

  if (!isKnownRoute(pathname, knownRoutes)) {
    return 'not-found'
  }

  return 'error'
}

function FallbackIcon({ type, className = 'h-11 w-11 sm:h-12 sm:w-12' }) {
  const commonProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    className,
  }

  if (type === 'offline') {
    return (
      <svg {...commonProps}>
        <path d="M2.5 8.6A15.1 15.1 0 0 1 12 5c2.8 0 5.6.75 8 2.15" />
        <path d="M5.2 12.45A11.06 11.06 0 0 1 12 10.2c1.84 0 3.64.45 5.24 1.3" />
        <path d="M8.85 16.05A5.95 5.95 0 0 1 12 15.2c.82 0 1.63.16 2.37.46" />
        <path d="M12 19.2h.01" />
        <path d="M3 3l18 18" />
      </svg>
    )
  }

  if (type === 'not-found') {
    return (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
        <path d="M9.3 9.35h3.4" />
        <path d="M9.3 12.65h1.9" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3.75 3.6 18.3a1 1 0 0 0 .87 1.5h15.06a1 1 0 0 0 .87-1.5L12 3.75Z" />
      <path d="M12 9v4.7" />
      <path d="M12 17.05h.01" />
    </svg>
  )
}

function FallbackScene({ type, isDark, language }) {
  const frameStyle = isDark
    ? 'linear-gradient(180deg, rgba(16, 31, 56, 0.96), rgba(12, 24, 44, 0.92))'
    : 'linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(239, 246, 251, 0.88))'

  const panelStyle = isDark
    ? 'linear-gradient(180deg, rgba(23, 44, 80, 0.96), rgba(15, 30, 55, 0.9))'
    : 'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 249, 252, 0.92))'

  const orbitStyle = isDark ? 'rgba(89, 199, 216, 0.2)' : 'rgba(31, 169, 200, 0.16)'
  const warmStyle = isDark ? 'rgba(243, 200, 115, 0.2)' : 'rgba(239, 197, 111, 0.18)'

  const statePills = {
    en: {
      offline: ['Signal', 'Reconnect'],
      'not-found': ['Route', 'Guide'],
      error: ['Refresh', 'Recover'],
    },
    fa: {
      offline: ['اتصال', 'بازگشت'],
      'not-found': ['مسیر', 'راهنما'],
      error: ['تازه‌سازی', 'بازیابی'],
    },
  }

  const activeLanguage = statePills[language] ? language : 'en'
  const [leftPill, rightPill] = statePills[activeLanguage][type] ?? statePills[activeLanguage].error

  return (
    <div
      className="relative mx-auto mt-5 h-44 w-full max-w-[320px] overflow-hidden rounded-[2rem] border"
      style={{
        background: frameStyle,
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -left-8 -top-10 h-28 w-28 rounded-full blur-2xl"
        style={{ background: 'rgba(31, 169, 200, 0.2)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-6 h-24 w-24 rounded-full blur-2xl"
        style={{ background: 'rgba(239, 197, 111, 0.22)' }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-5 h-28 w-28 -translate-x-1/2 rounded-full border border-dashed"
        style={{ borderColor: orbitStyle }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-9 h-20 w-20 -translate-x-1/2 rounded-full border border-dashed"
        style={{ borderColor: warmStyle }}
      />

      <div
        className="absolute left-5 top-5 inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.16em]"
        style={{
          background: isDark ? 'rgba(20, 39, 69, 0.92)' : 'rgba(255, 255, 255, 0.84)',
          color: 'var(--text-soft)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        {leftPill}
      </div>

      <div
        className="absolute right-5 top-8 inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.16em]"
        style={{
          background: isDark ? 'rgba(20, 39, 69, 0.92)' : 'rgba(255, 255, 255, 0.84)',
          color: 'var(--text-soft)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        {rightPill}
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 h-3 w-3 rounded-full"
        style={{ background: 'var(--accent)' }}
      />
      <div
        aria-hidden="true"
        className="absolute right-12 top-14 h-2.5 w-2.5 rounded-full"
        style={{ background: 'var(--accent-warm)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-16 h-2 w-2 rounded-full"
        style={{ background: isDark ? '#e8efff' : '#0f1e4a', opacity: 0.72 }}
      />

      <div
        className="absolute inset-x-6 bottom-5 rounded-[1.75rem] border px-5 py-5"
        style={{
          background: panelStyle,
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="h-2 w-20 rounded-full" style={{ background: 'rgba(31, 169, 200, 0.2)' }} />
            <div className="mt-3 h-2 w-28 rounded-full" style={{ background: 'rgba(239, 197, 111, 0.22)' }} />
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent-warm)' }} />
              <span className="h-2 w-10 rounded-full" style={{ background: 'rgba(31, 169, 200, 0.14)' }} />
            </div>
          </div>

          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem]"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 169, 200, 0.16), rgba(239, 197, 111, 0.18))',
              color: 'var(--accent-dark)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <FallbackIcon className="h-8 w-8" type={type} />
          </div>
        </div>
      </div>
    </div>
  )
}

const copy = {
  en: {
    offline: {
      badge: 'Offline',
      accent: 'We will pick things up right where you left off.',
      title: 'You are temporarily away from the school network',
      message: 'Please check your internet connection and try again. We will be ready as soon as you are back online.',
      primaryAction: 'Retry',
      secondaryAction: 'Go Home',
      helper: 'Your current page is safe. Reload whenever your connection returns.',
    },
    'not-found': {
      badge: '404 Not Found',
      accent: 'A quick route back is ready below.',
      title: 'This page is not part of the current school website',
      message: "The address you opened does not lead to an active page right now. Let's guide you back to a useful place.",
      primaryAction: 'Reload Page',
      secondaryAction: 'Go Home',
      helper: 'You may have followed an old link or typed the address differently.',
      pathLabel: 'Requested path',
    },
    error: {
      badge: 'Something went wrong',
      accent: 'A fresh reload usually clears this kind of interruption.',
      title: 'This page needs a fresh start',
      message: 'A temporary issue interrupted this view. Reload the page, or return home and continue browsing smoothly.',
      primaryAction: 'Reload',
      secondaryAction: 'Go Home',
      helper: 'If the issue continues, try again in a moment.',
    },
  },
  fa: {
    offline: {
      badge: 'آفلاین',
      accent: 'همه‌چیز از همان‌جایی که بود ادامه پیدا می‌کند.',
      title: 'فعلاً ارتباط شما با وب‌سایت قطع شده است',
      message: 'لطفاً اتصال اینترنت خود را بررسی کنید و دوباره تلاش کنید. به‌محض بازگشت اتصال، همه‌چیز آماده خواهد بود.',
      primaryAction: 'تلاش دوباره',
      secondaryAction: 'رفتن به خانه',
      helper: 'صفحه فعلی شما از بین نرفته است. بعد از برگشت اینترنت دوباره بارگذاری کنید.',
    },
    'not-found': {
      badge: '۴۰۴ پیدا نشد',
      accent: 'پایین کارت، راه سریع برگشت آماده است.',
      title: 'این صفحه در نسخه فعلی وب‌سایت موجود نیست',
      message: 'آدرسی که باز کرده‌اید به یک صفحه فعال نمی‌رسد. بیایید شما را به یک بخش مفید برگردانیم.',
      primaryAction: 'بارگذاری دوباره',
      secondaryAction: 'رفتن به خانه',
      helper: 'ممکن است لینک قدیمی باشد یا آدرس متفاوت وارد شده باشد.',
      pathLabel: 'مسیر درخواستی',
    },
    error: {
      badge: 'اختلال موقت',
      accent: 'اغلب با یک بار بارگذاری تازه، مشکل برطرف می‌شود.',
      title: 'این صفحه به یک شروع تازه نیاز دارد',
      message: 'یک مشکل موقت نمایش این بخش را متوقف کرده است. صفحه را دوباره بارگذاری کنید یا به خانه برگردید.',
      primaryAction: 'بارگذاری دوباره',
      secondaryAction: 'رفتن به خانه',
      helper: 'اگر مشکل ادامه داشت، کمی بعد دوباره امتحان کنید.',
    },
  },
}

export default function FallbackPage({
  type = 'auto',
  className = '',
  homePath = routes.home,
  knownRoutes = defaultKnownRoutes,
  onRetry,
}) {
  const location = useLocation()
  const isOnline = useOnlineStatus()
  const { language, isRTL } = useLanguage()
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)

    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [type, isOnline, location.pathname])

  const resolvedType = useMemo(
    () =>
      resolveFallbackType({
        type,
        isOnline,
        pathname: location.pathname,
        knownRoutes,
      }),
    [isOnline, knownRoutes, location.pathname, type],
  )

  const content = (copy[language] ?? copy.en)[resolvedType]
  const isDark = theme === 'dark'

  const handleRetry = () => {
    if (typeof onRetry === 'function') {
      onRetry()
      return
    }

    window.location.reload()
  }

  return (
    <section className={`flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-10 sm:px-6 sm:py-14 ${className}`}>
      <div className="relative w-full max-w-[440px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[2rem] blur-3xl"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(31, 169, 200, 0.16), transparent 42%), radial-gradient(circle at bottom right, rgba(239, 197, 111, 0.16), transparent 38%)',
          }}
        />

        <div
          className={`relative overflow-hidden rounded-[2rem] border px-6 py-7 text-center backdrop-blur-xl transition-all duration-500 ease-out sm:px-8 sm:py-8 ${
            isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
          }`}
          style={{
            background: isDark
              ? 'linear-gradient(180deg, rgba(20, 38, 70, 0.98), rgba(12, 25, 46, 0.96))'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(241, 247, 252, 0.92))',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow)',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28"
            style={{
              background: 'radial-gradient(circle at top, rgba(31, 169, 200, 0.14), transparent 62%)',
            }}
          />

          <span
            className="relative inline-flex rounded-full px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.28em]"
            style={{
              background: 'rgba(31, 169, 200, 0.1)',
              color: 'var(--accent)',
            }}
          >
            {content.badge}
          </span>

          <FallbackScene isDark={isDark} language={language} type={resolvedType} />

          <p className="relative mt-6 text-sm font-semibold leading-6" style={{ color: 'var(--accent)' }}>
            {content.accent}
          </p>

          <h1 className="relative mt-3 text-2xl font-black tracking-tight sm:text-[2rem]" style={{ color: 'var(--text)' }}>
            {content.title}
          </h1>

          <p className="relative mt-3 text-sm leading-7 sm:text-base" style={{ color: 'var(--text-soft)' }}>
            {content.message}
          </p>

          {resolvedType === 'not-found' ? (
            <div
              className="relative mt-5 rounded-2xl border px-4 py-3 text-start"
              dir="ltr"
              style={{
                background: isDark ? 'rgba(17, 31, 58, 0.94)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: 'var(--border)',
              }}
            >
              <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em]" style={{ color: 'var(--text-soft)' }}>
                {content.pathLabel}
              </p>
              <p className="mt-2 truncate text-sm font-semibold" style={{ color: 'var(--text)' }}>
                {normalizePath(location.pathname)}
              </p>
            </div>
          ) : null}

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5"
              onClick={handleRetry}
              type="button"
              style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #74d0e3 100%)',
                color: '#08203c',
                boxShadow: '0 18px 36px rgba(31, 169, 200, 0.22)',
              }}
            >
              {content.primaryAction}
            </button>

            <Link
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5"
              to={homePath}
              style={{
                background: 'var(--surface-strong)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
            >
              {content.secondaryAction}
            </Link>
          </div>

          <p className="relative mt-5 text-sm leading-6" style={{ color: 'var(--text-soft)' }}>
            {content.helper}
          </p>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-6 bottom-4 h-px ${isRTL ? 'origin-right' : 'origin-left'}`}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(31, 169, 200, 0.34), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

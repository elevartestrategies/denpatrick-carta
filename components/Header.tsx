'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Lang } from '@/lib/carta-data'
import { t } from '@/lib/i18n'

interface HeaderProps {
  lang: Lang
  backHref?: string
  backLabel?: string
  title?: string
  showLangSwitch?: boolean
}

const STORAGE_KEY = 'dp-lang'

export default function Header({ lang, backHref, backLabel, title, showLangSwitch }: HeaderProps) {
  const router = useRouter()

  function switchLang() {
    localStorage.removeItem(STORAGE_KEY)
    router.push('/')
  }

  const switchLabel =
    lang === 'ca' ? 'Canviar idioma' : lang === 'es' ? 'Cambiar idioma' : 'Changer de langue'

  return (
    <header className="sticky top-0 z-10 bg-pergami border-b border-daurat/30 shadow-sm">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* Left — back or logo */}
        {backHref ? (
          <Link
            href={backHref}
            className="min-w-[44px] min-h-[44px] flex items-center text-bru font-sans text-sm font-medium"
            aria-label={backLabel ?? t('tornar', lang)}
          >
            <span className="mr-1">←</span>
            <span className="hidden xs:inline">{backLabel ?? t('tornar', lang)}</span>
          </Link>
        ) : (
          <button
            onClick={switchLang}
            className="flex items-center gap-2 min-h-[44px] text-left"
            aria-label={switchLabel}
          >
            <span className="font-cinzel text-bru text-sm font-bold tracking-wide leading-tight">
              Den Patrick
            </span>
          </button>
        )}

        {/* Center — category title */}
        {title && (
          <h1 className="font-cinzel text-bru text-sm font-bold truncate max-w-[160px] text-center flex-1">
            {title}
          </h1>
        )}

        {/* Right — language switch globe */}
        {showLangSwitch ? (
          <button
            onClick={switchLang}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-bru/40 hover:text-bru/80 transition-colors rounded-lg"
            title={switchLabel}
            aria-label={switchLabel}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
          </button>
        ) : (
          <div className="min-w-[44px]" />
        )}
      </div>
    </header>
  )
}

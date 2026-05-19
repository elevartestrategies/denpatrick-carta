'use client'

import Link from 'next/link'
import type { Lang } from '@/lib/carta-data'
import { t } from '@/lib/i18n'

interface HeaderProps {
  lang: Lang
  backHref?: string
  backLabel?: string
  title?: string
}

export default function Header({ lang, backHref, backLabel, title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-pergami border-b border-daurat/30 shadow-sm">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
        {backHref ? (
          <Link
            href={backHref}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-bru font-sans text-sm font-medium"
            aria-label={backLabel ?? t('tornar', lang)}
          >
            <span className="mr-1">←</span>
            <span>{backLabel ?? t('tornar', lang)}</span>
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🥞</span>
            <span className="font-cinzel text-bru text-sm font-bold tracking-wide leading-tight">
              Den Patrick
            </span>
          </Link>
        )}
        {title && (
          <h1 className="font-cinzel text-bru text-base font-bold ml-auto truncate max-w-[180px]">
            {title}
          </h1>
        )}
      </div>
    </header>
  )
}

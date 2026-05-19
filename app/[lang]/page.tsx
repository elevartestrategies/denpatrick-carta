import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { categories } from '@/lib/carta-data'
import type { Lang } from '@/lib/carta-data'
import { LANGS, t } from '@/lib/i18n'
import CategoriaButton from '@/components/CategoriaButton'
import Header from '@/components/Header'

interface Props {
  params: { lang: string }
}

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as Lang
  const titles: Record<Lang, string> = {
    ca: 'Den Patrick — Carta',
    es: 'Den Patrick — Carta',
    fr: 'Den Patrick — Carte',
  }
  return { title: titles[lang] ?? 'Den Patrick' }
}

export default function CategoriesPage({ params }: Props) {
  const lang = params.lang as Lang
  if (!LANGS.includes(lang)) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} />

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        {/* Títol */}
        <div className="text-center mb-6">
          <h2 className="font-cinzel text-bru text-xl font-bold tracking-wider">
            {t('carta', lang)}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-daurat opacity-50" />
            <span className="text-daurat text-xs">✦</span>
            <div className="h-px w-10 bg-daurat opacity-50" />
          </div>
        </div>

        {/* Grid categories */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <CategoriaButton key={cat.id} categoria={cat} lang={lang} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-lg mx-auto w-full px-4 py-6 mt-auto border-t border-daurat/20">
        <div className="text-center space-y-1">
          <p className="font-cinzel text-bru/70 text-xs tracking-wider uppercase">
            {t('horari', lang)}
          </p>
          <p className="font-sans text-tinta/60 text-xs">{t('horariHivern1', lang)}</p>
          <p className="font-sans text-tinta/60 text-xs">{t('horariHivern2', lang)}</p>
          <p className="font-sans text-tinta/50 text-xs">{t('festius', lang)}</p>
          <div className="pt-2 space-y-0.5">
            <p className="font-sans text-tinta/40 text-xs">Tel: 930 25 30 04 · 633 91 41 58</p>
            <p className="font-sans text-tinta/40 text-[10px] italic">{t('cartaHivern', lang)}</p>
          </div>
        </div>

        {/* Canviar idioma */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="font-sans text-tinta/40 text-[11px] underline underline-offset-2"
          >
            {lang === 'ca' ? 'Canviar idioma' : lang === 'es' ? 'Cambiar idioma' : 'Changer de langue'}
          </Link>
        </div>
      </footer>
    </div>
  )
}

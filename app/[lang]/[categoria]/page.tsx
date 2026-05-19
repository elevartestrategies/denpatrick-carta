import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { categories } from '@/lib/carta-data'
import type { Lang } from '@/lib/carta-data'
import { LANGS, t } from '@/lib/i18n'
import ProducteCard from '@/components/ProducteCard'
import Header from '@/components/Header'

interface Props {
  params: { lang: string; categoria: string }
}

export async function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    categories.map((cat) => ({ lang, categoria: cat.id }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as Lang
  const cat = categories.find((c) => c.id === params.categoria)
  if (!cat) return {}
  return { title: `${cat.nom[lang]} — Den Patrick` }
}

export default function ProductesPage({ params }: Props) {
  const lang = params.lang as Lang
  if (!LANGS.includes(lang)) notFound()

  const cat = categories.find((c) => c.id === params.categoria)
  if (!cat) notFound()

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        lang={lang}
        backHref={`/${lang}`}
        backLabel={t('tornarCategories', lang)}
        title={cat.nom[lang]}
      />

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-5">
        {/* Títol de categoria */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl" role="img" aria-hidden>{cat.emoji}</span>
          <div>
            <h2 className="font-cinzel text-bru text-lg font-bold leading-tight">
              {cat.nom[lang]}
            </h2>
            <div className="h-px w-full bg-daurat opacity-40 mt-1.5" />
          </div>
        </div>

        {/* Productes directes (sense subcategories) */}
        {cat.productes && cat.productes.length > 0 && (
          <div className="bg-white/30 rounded-xl px-4 py-1 mb-4 border border-daurat/20">
            {cat.productes.map((p, i) => (
              <ProducteCard key={i} producte={p} lang={lang} />
            ))}
          </div>
        )}

        {/* Subcategories */}
        {cat.subcategories?.map((sub, si) => (
          <div key={si} className="mb-5">
            {/* Separador decoratiu */}
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-daurat/30" />
              <h3 className="font-cinzel text-bru/80 text-sm font-semibold px-2 text-center">
                {sub.nom[lang]}
              </h3>
              <div className="h-px flex-1 bg-daurat/30" />
            </div>

            <div className="bg-white/30 rounded-xl px-4 py-1 border border-daurat/20">
              {sub.productes.map((p, pi) => (
                <ProducteCard key={pi} producte={p} lang={lang} />
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-lg mx-auto w-full px-4 py-5 border-t border-daurat/20 text-center space-y-1">
        <p className="font-sans text-tinta/40 text-xs">{t('preusPoden', lang)}</p>
        <p className="font-sans text-tinta/30 text-[10px] italic">{t('cartaHivern', lang)}</p>
      </footer>
    </div>
  )
}

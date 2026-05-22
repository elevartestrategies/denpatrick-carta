'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { Lang, Categoria } from '@/lib/carta-data'
import { t } from '@/lib/i18n'
import ProducteCard from '@/components/ProducteCard'
import Header from '@/components/Header'
import { categoriaIconMap } from '@/components/icons'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
}

interface Props {
  lang: Lang
  cat: Categoria
}

export default function ProductesContent({ lang, cat }: Props) {
  const reduce = useReducedMotion()
  const Icon = categoriaIconMap[cat.id]

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
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {Icon ? (
            <Icon size={44} />
          ) : (
            <span className="text-3xl" aria-hidden>{cat.emoji}</span>
          )}
          <div className="flex-1">
            <h2 className="font-cinzel text-bru text-lg font-bold leading-tight">
              {cat.nom[lang]}
            </h2>
            <div className="h-px w-full bg-daurat opacity-40 mt-1.5" />
          </div>
        </motion.div>

        {/* Productes directes (sense subcategories) */}
        {cat.productes && cat.productes.length > 0 && (
          <motion.div
            className="card-artesa rounded-xl px-4 py-1 mb-4"
            variants={reduce ? {} : containerVariants}
            initial={reduce ? false : 'hidden'}
            animate="show"
          >
            {cat.productes.map((p, i) => (
              <motion.div key={i} variants={reduce ? {} : itemVariants}>
                <ProducteCard producte={p} lang={lang} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Subcategories */}
        {cat.subcategories?.map((sub, si) => (
          <div key={si} className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-daurat/30" />
              <h3 className="font-cinzel text-bru/80 text-sm font-semibold px-2 text-center">
                {sub.nom[lang]}
              </h3>
              <div className="h-px flex-1 bg-daurat/30" />
            </div>

            <motion.div
              className="card-artesa rounded-xl px-4 py-1"
              variants={reduce ? {} : containerVariants}
              initial={reduce ? false : 'hidden'}
              animate="show"
            >
              {sub.productes.map((p, pi) => (
                <motion.div key={pi} variants={reduce ? {} : itemVariants}>
                  <ProducteCard producte={p} lang={lang} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </main>

      <footer className="max-w-lg mx-auto w-full px-4 py-5 border-t border-daurat/20 text-center space-y-1">
        <p className="font-sans text-tinta/40 text-xs">{t('preusPoden', lang)}</p>
        <p className="font-sans text-tinta/30 text-[10px] italic">{t('cartaHivern', lang)}</p>
      </footer>
    </div>
  )
}

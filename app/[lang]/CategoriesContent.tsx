'use client'

import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import type { Lang, Categoria } from '@/lib/carta-data'
import { t } from '@/lib/i18n'
import CategoriaButton from '@/components/CategoriaButton'
import Header from '@/components/Header'

const STORAGE_KEY = 'dp-lang'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 280, damping: 24 } },
}

interface Props {
  lang: Lang
  categories: Categoria[]
}

export default function CategoriesContent({ lang, categories }: Props) {
  const router = useRouter()
  const reduce = useReducedMotion()

  function switchLang() {
    localStorage.removeItem(STORAGE_KEY)
    router.push('/')
  }

  const switchLabel =
    lang === 'ca' ? 'Canviar idioma' : lang === 'es' ? 'Cambiar idioma' : 'Changer de langue'

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} showLangSwitch />

      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6">
        {/* Títol */}
        <motion.div
          className="text-center mb-6"
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <h2 className="font-cinzel text-bru text-xl font-bold tracking-wider">
            {t('carta', lang)}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-daurat opacity-50" />
            <span className="text-daurat text-xs">✦</span>
            <div className="h-px w-10 bg-daurat opacity-50" />
          </div>
        </motion.div>

        {/* Grid categories amb stagger */}
        <motion.div
          className="grid grid-cols-2 gap-3"
          variants={reduce ? {} : containerVariants}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={reduce ? {} : itemVariants}>
              <CategoriaButton categoria={cat} lang={lang} />
            </motion.div>
          ))}
        </motion.div>
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

        <div className="mt-4 text-center">
          <button
            onClick={switchLang}
            className="font-sans text-tinta/40 text-[11px] underline underline-offset-2 min-h-[36px]"
          >
            {switchLabel}
          </button>
        </div>
      </footer>
    </div>
  )
}

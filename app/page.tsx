'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import type { Lang } from '@/lib/carta-data'
import { LANG_NAMES, LANGS } from '@/lib/i18n'
import { CrepesDolcesIcon } from '@/components/icons'

const STORAGE_KEY = 'dp-lang'

export default function IdiomaSelectorPage() {
  const router = useRouter()
  const reduce = useReducedMotion()

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved && LANGS.includes(saved)) {
      router.replace(`/${saved}`)
    }
  }, [router])

  function handleSelect(lang: Lang) {
    localStorage.setItem(STORAGE_KEY, lang)
    router.push(`/${lang}`)
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Logo / capçalera */}
      <motion.div
        className="flex-shrink-0 flex flex-col items-center pt-12 pb-8 px-6"
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="w-24 h-24 rounded-full border-4 border-daurat flex items-center justify-center bg-bru mb-5 shadow-lg">
          <CrepesDolcesIcon size={56} />
        </div>
        <h1 className="font-cinzel text-bru text-2xl font-bold tracking-wider text-center">
          Den Patrick
        </h1>
        <p className="font-sans text-tinta/60 text-sm mt-1 text-center">
          Crêperie Bretonne &amp; Gelateria Artesana
        </p>
        <div className="mt-4 w-16 h-px bg-daurat opacity-60" />
        <p className="font-cinzel text-bru/70 text-xs mt-4 tracking-widest text-center uppercase">
          Benvinguts · Bienvenidos · Bienvenue
        </p>
      </motion.div>

      {/* Botons d'idioma amb stagger */}
      <div className="flex-1 flex flex-col gap-4 px-6 pb-10 max-w-sm mx-auto w-full">
        {LANGS.map((lang, i) => (
          <motion.button
            key={lang}
            onClick={() => handleSelect(lang)}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: reduce ? 0 : 0.1 + i * 0.1,
            }}
            whileHover={reduce ? {} : { scale: 1.03, boxShadow: '0 8px 28px rgba(61,31,13,0.2)' }}
            whileTap={reduce ? {} : { scale: 0.97 }}
            className="
              w-full min-h-[72px] rounded-2xl
              bg-bru text-pergami
              font-cinzel text-xl font-bold tracking-wide
              border-2 border-daurat/60
              shadow-md
              flex items-center justify-center gap-3
            "
          >
            {LANG_NAMES[lang]}
          </motion.button>
        ))}
      </div>

      {/* Footer discret */}
      <p className="text-center font-sans text-[11px] text-tinta/30 pb-6 px-4">
        Ctra del Montseny, 31 · Sant Esteve de Palautordera
      </p>
    </main>
  )
}

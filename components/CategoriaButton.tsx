'use client'

import Link from 'next/link'
import { motion, useSpring, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { Lang, Categoria } from '@/lib/carta-data'
import { categoriaIconMap } from '@/components/icons'

interface CategoriaButtonProps {
  categoria: Categoria
  lang: Lang
}

export default function CategoriaButton({ categoria, lang }: CategoriaButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const rotateX = useSpring(0, { stiffness: 300, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 300, damping: 20 })
  const iconScale = useSpring(1, { stiffness: 300, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(y * -8)
    rotateY.set(x * 8)
    iconScale.set(1.12)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
    iconScale.set(1)
  }

  const Icon = categoriaIconMap[categoria.id]

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={reduce ? {} : { rotateX, rotateY }}
        whileHover={reduce ? {} : { scale: 1.04, boxShadow: '0 8px 24px rgba(61,31,13,0.15)' }}
        whileTap={reduce ? {} : { scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Link
          href={`/${lang}/${categoria.id}`}
          className="
            flex flex-col items-center justify-center gap-3
            min-h-[120px] p-4 rounded-xl
            card-artesa
            shadow-sm
            block
          "
        >
          <motion.div style={reduce ? {} : { scale: iconScale }}>
            {Icon ? (
              <Icon size={54} />
            ) : (
              <span className="text-4xl leading-none" aria-hidden>{categoria.emoji}</span>
            )}
          </motion.div>
          <span className="font-cinzel text-bru text-sm font-semibold text-center leading-tight tracking-wide">
            {categoria.nom[lang]}
          </span>
        </Link>
      </motion.div>
    </div>
  )
}

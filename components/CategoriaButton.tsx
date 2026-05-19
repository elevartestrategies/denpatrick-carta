import Link from 'next/link'
import type { Lang, Categoria } from '@/lib/carta-data'

interface CategoriaButtonProps {
  categoria: Categoria
  lang: Lang
}

export default function CategoriaButton({ categoria, lang }: CategoriaButtonProps) {
  return (
    <Link
      href={`/${lang}/${categoria.id}`}
      className="
        flex flex-col items-center justify-center gap-2
        min-h-[120px] p-4 rounded-xl
        bg-pergami border-2 border-daurat/60
        shadow-sm active:shadow-none
        transition-all duration-150
        active:scale-[0.97] active:border-daurat
        hover:border-daurat hover:shadow-md
      "
    >
      <span className="text-4xl leading-none" role="img" aria-hidden>
        {categoria.emoji}
      </span>
      <span className="font-cinzel text-bru text-sm font-semibold text-center leading-tight tracking-wide">
        {categoria.nom[lang]}
      </span>
    </Link>
  )
}

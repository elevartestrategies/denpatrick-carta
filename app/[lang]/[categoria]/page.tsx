import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { categories } from '@/lib/carta-data'
import type { Lang } from '@/lib/carta-data'
import { LANGS } from '@/lib/i18n'
import ProductesContent from './ProductesContent'

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

  return <ProductesContent lang={lang} cat={cat} />
}

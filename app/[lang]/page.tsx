import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { categories } from '@/lib/carta-data'
import type { Lang } from '@/lib/carta-data'
import { LANGS } from '@/lib/i18n'
import CategoriesContent from './CategoriesContent'

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
    en: 'Den Patrick — Menu',
  }
  return { title: titles[lang] ?? 'Den Patrick' }
}

export default function CategoriesPage({ params }: Props) {
  const lang = params.lang as Lang
  if (!LANGS.includes(lang)) notFound()

  return <CategoriesContent lang={lang} categories={categories} />
}

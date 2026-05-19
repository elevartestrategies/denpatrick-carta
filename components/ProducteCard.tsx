import type { Lang, Producte } from '@/lib/carta-data'
import { t } from '@/lib/i18n'

interface ProducteCardProps {
  producte: Producte
  lang: Lang
}

export default function ProducteCard({ producte, lang }: ProducteCardProps) {
  const preu = producte.preu.toFixed(2).replace('.', ',')

  return (
    <div className="flex items-start justify-between gap-3 py-3 border-b border-daurat/20 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
          <span className="font-sans font-semibold text-bru text-[15px] leading-snug">
            {producte.nom[lang]}
          </span>
          {producte.sensGluten && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              {t('sensGluten', lang)}
            </span>
          )}
          {producte.vegan && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-200 shrink-0">
              {t('vegan', lang)}
            </span>
          )}
          {producte.temporada && (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-200 shrink-0">
              {t('temporada', lang)}
            </span>
          )}
        </div>
        {producte.descripcio && (
          <p className="font-sans text-sm text-tinta/60 leading-snug mt-0.5">
            {producte.descripcio[lang]}
          </p>
        )}
      </div>
      <span className="font-cinzel font-bold text-bordeus text-[15px] shrink-0 pt-0.5">
        {preu} €
      </span>
    </div>
  )
}

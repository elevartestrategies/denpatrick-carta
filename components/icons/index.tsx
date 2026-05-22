export { CrepesDolcesIcon } from './CrepesDolcesIcon'
export { GaletteIcon } from './GaletteIcon'
export { GofresIcon } from './GofresIcon'
export { BikinisIcon } from './BikinisIcon'
export { BegudesIcon } from './BegudesIcon'
export { GelatsIcon } from './GelatsIcon'

import { CrepesDolcesIcon } from './CrepesDolcesIcon'
import { GaletteIcon } from './GaletteIcon'
import { GofresIcon } from './GofresIcon'
import { BikinisIcon } from './BikinisIcon'
import { BegudesIcon } from './BegudesIcon'
import { GelatsIcon } from './GelatsIcon'
import type { ComponentType } from 'react'

export const categoriaIconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  'crepes-dolces': CrepesDolcesIcon,
  'galettes': GaletteIcon,
  'gofres': GofresIcon,
  'bikinis': BikinisIcon,
  'begudes': BegudesIcon,
  'gelats': GelatsIcon,
}

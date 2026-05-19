import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-6xl mb-4">🥞</span>
      <h1 className="font-cinzel text-bru text-xl font-bold mb-2">Pàgina no trobada</h1>
      <p className="font-sans text-tinta/60 text-sm mb-6">
        Aquesta pàgina no existeix a la carta.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-bru text-pergami font-cinzel text-sm font-semibold border border-daurat/60"
      >
        Tornar a l'inici
      </Link>
    </div>
  )
}

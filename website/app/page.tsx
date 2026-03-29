'use client'

import { useState } from 'react'
import Image from 'next/image'

type Result = {
  word: string
  imageUrl: string
  imageAlt: string
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function generate() {
    setLoading(true)
    setResult(null)
    setError(null)
    try {
      const res = await fetch('/api/random-image')
      const data = await res.json()
      if (!res.ok) {
        setError(data.word
          ? `😅 Kein Bild gefunden für „${data.word}" — versuch's nochmal!`
          : '😬 Etwas ist schiefgelaufen. Versuch es nochmal!')
      } else {
        setResult(data)
      }
    } catch {
      setError('😬 Verbindungsfehler. Bitte nochmal versuchen!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 flex flex-col items-center justify-center p-8 gap-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg tracking-tight">
          🎲 RandomImage
        </h1>
        <p className="mt-3 text-white/80 text-lg font-medium">
          Klick den Button — lass dich überraschen
        </p>
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className="px-10 py-5 bg-white text-purple-700 font-extrabold text-xl rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-3">
            <svg className="animate-spin h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Suche...
          </span>
        ) : (
          '🎲 Zufälliges Bild'
        )}
      </button>

      {error && (
        <div className="animate-fade-in bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg text-center max-w-md">
          {error}
        </div>
      )}

      {result && (
        <div className="animate-fade-in flex flex-col items-center gap-6 w-full max-w-lg">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-white font-black text-2xl tracking-wide drop-shadow">
              ✨ {result.word}
            </span>
          </div>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30">
            <Image
              src={result.imageUrl}
              alt={result.imageAlt}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </div>
      )}
    </main>
  )
}

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const wordRes = await fetch('https://random-word-api.herokuapp.com/word', { cache: 'no-store' })
    if (!wordRes.ok) throw new Error('Word API failed')
    const [word]: string[] = await wordRes.json()

    const pixabayRes = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(word)}&image_type=photo&per_page=5&safesearch=true`,
      { cache: 'no-store' }
    )
    if (!pixabayRes.ok) throw new Error('Pixabay API failed')
    const data = await pixabayRes.json()

    if (!data.hits || data.hits.length === 0) {
      return NextResponse.json({ error: 'No image found', word }, { status: 404 })
    }

    const image = data.hits[0]
    return NextResponse.json({ word, imageUrl: image.largeImageURL, imageAlt: image.tags })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

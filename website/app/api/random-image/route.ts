import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 1. Get a random word
    const wordRes = await fetch('https://random-word-api.herokuapp.com/word', {
      cache: 'no-store',
    })
    if (!wordRes.ok) throw new Error('Failed to fetch random word')
    const [word]: string[] = await wordRes.json()

    // 2. Search Pixabay for an image matching the word
    const pixabayRes = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(word)}&image_type=photo&per_page=5&safesearch=true`,
      { cache: 'no-store' }
    )
    if (!pixabayRes.ok) throw new Error('Pixabay request failed')
    const pixabayData = await pixabayRes.json()

    if (!pixabayData.hits || pixabayData.hits.length === 0) {
      return NextResponse.json({ error: 'No image found', word }, { status: 404 })
    }

    const image = pixabayData.hits[0]
    return NextResponse.json({
      word,
      imageUrl: image.largeImageURL,
      imageAlt: image.tags,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

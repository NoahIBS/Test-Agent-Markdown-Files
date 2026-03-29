# 🎲 RandomImage

A Next.js single-page app where you click a button → a random word is generated → Pixabay is searched for a matching photo → the image is displayed. Colorful, playful, and endlessly surprising.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **APIs:** [Random Word API](https://random-word-api.herokuapp.com/) + [Pixabay API](https://pixabay.com/api/docs/)
- **Hosting:** Netlify

## Setup

```bash
# 1. Clone the repo
git clone https://github.com/NoahIBS/Test-Agent-Markdown-Files.git
cd Test-Agent-Markdown-Files/website

# 2. Install dependencies
npm install

# 3. Add your Pixabay API key
cp .env.example .env.local
# Edit .env.local and set PIXABAY_API_KEY

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Getting a Pixabay API Key

1. Go to [https://pixabay.com/api/docs/](https://pixabay.com/api/docs/)
2. Sign up for a free account
3. Copy your API key and paste it into `.env.local`

## API Documentation

### `GET /api/random-image`

Fetches a random word and finds a matching photo from Pixabay.

**Success (200):**
```json
{ "word": "elephant", "imageUrl": "https://cdn.pixabay.com/...", "imageAlt": "elephant, animal, wildlife" }
```

**No image found (404):**
```json
{ "error": "No image found", "word": "xyzabc" }
```

**Server error (500):**
```json
{ "error": "Something went wrong" }
```

## Netlify Deployment

1. Push your code to GitHub
2. Connect the repo to [Netlify](https://netlify.com)
3. Set **Base directory** to `website`
4. Set **Build command** to `npm run build`
5. Set **Publish directory** to `.next`
6. Add the environment variable `PIXABAY_API_KEY` in Netlify → Site settings → Environment variables
7. Deploy!

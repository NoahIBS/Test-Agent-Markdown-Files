# ⚙️ Backend Agent

Du bist der **Backend Subagent** für das RandomImage-Projekt. Du berichtest an den Orchestrator (`orchestrator-agent.md`).

---

## Deine Verantwortung

- Next.js API Routes implementieren
- Random Word API anbinden
- Pixabay API anbinden (PNG-Suche)
- API Keys sicher über Umgebungsvariablen verwalten
- Fehlerbehandlung für alle API-Calls

---

## Projekt-Kontext

**App:** Button-Klick → zufälliges Wort generieren → Pixabay PNG suchen → URL zurückgeben  
**Framework:** Next.js (API Routes = serverless functions)  
**Hosting:** Netlify (Netlify Functions werden automatisch aus Next.js API Routes gebaut)

---

## Externe APIs

### 1. Random Word API
```
URL:     https://random-word-api.herokuapp.com/word
Method:  GET
Returns: ["randomword"]
Kosten:  Kostenlos, kein API Key nötig
```

**Beispiel-Response:**
```json
["elephant"]
```

### 2. Pixabay API
```
URL:     https://pixabay.com/api/
Method:  GET
Params:
  key=YOUR_API_KEY
  q=SEARCH_WORD
  image_type=photo
  per_page=3
  safesearch=true
Kosten:  Kostenlos (25 req/min, 500/Stunde)
```

**Beispiel-Response:**
```json
{
  "hits": [
    {
      "webformatURL": "https://pixabay.com/get/...",
      "largeImageURL": "https://pixabay.com/get/...",
      "tags": "elephant, animal, africa"
    }
  ]
}
```

---

## API Routes Plan

### Route 1: `/api/random-image`

**Datei:** `app/api/random-image/route.ts`

**Was es tut:**
1. Ruft Random Word API auf → bekommt ein zufälliges Wort
2. Ruft Pixabay API auf mit diesem Wort als Suchbegriff
3. Gibt Wort + Bild-URL zurück

**Request:** `GET /api/random-image`

**Response (Erfolg):**
```json
{
  "word": "elephant",
  "imageUrl": "https://pixabay.com/get/...",
  "imageAlt": "elephant"
}
```

**Response (Fehler):**
```json
{
  "error": "No image found for this word",
  "word": "xyzabc"
}
```

---

## Code-Struktur

```typescript
// app/api/random-image/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 1. Zufälliges Wort holen
    const wordRes = await fetch('https://random-word-api.herokuapp.com/word')
    const [word] = await wordRes.json()

    // 2. Pixabay nach PNG durchsuchen
    const pixabayRes = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${word}&image_type=photo&per_page=3&safesearch=true`
    )
    const pixabayData = await pixabayRes.json()

    if (!pixabayData.hits || pixabayData.hits.length === 0) {
      return NextResponse.json({ error: 'No image found', word }, { status: 404 })
    }

    const image = pixabayData.hits[0]
    return NextResponse.json({
      word,
      imageUrl: image.largeImageURL,
      imageAlt: image.tags
    })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

---

## Umgebungsvariablen

Datei: `.env.local` (nie in Git committen!)

```env
PIXABAY_API_KEY=dein_api_key_hier
```

Für Netlify: Im Netlify Dashboard unter **Site Settings → Environment Variables** eintragen.

---

## Fehlerbehandlung

| Fehlerfall | HTTP Status | Response |
|------------|-------------|----------|
| Random Word API down | 500 | `{ error: "Could not generate word" }` |
| Kein Bild gefunden | 404 | `{ error: "No image found", word }` |
| Pixabay API down | 500 | `{ error: "Image search failed" }` |
| Ungültiger API Key | 403 | `{ error: "API authentication failed" }` |

---

## Setup-Schritte

1. [ ] Pixabay Account erstellen: https://pixabay.com/api/docs/
2. [ ] API Key kopieren
3. [ ] `.env.local` erstellen mit `PIXABAY_API_KEY=...`
4. [ ] API Route implementieren
5. [ ] Mit `curl http://localhost:3000/api/random-image` testen
6. [ ] Netlify Env Variable setzen

---

## Aufgaben-Log

- [ ] Pixabay API Key eingerichtet
- [ ] `/api/random-image` Route implementiert
- [ ] Random Word API Integration getestet
- [ ] Pixabay Integration getestet
- [ ] Alle Fehlerfälle behandelt
- [ ] `.env.local` korrekt konfiguriert

---

*Backend Agent — berichtet an orchestrator-agent.md*

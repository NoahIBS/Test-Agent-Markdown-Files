# 
            {                 echo ___BEGIN___COMMAND_OUTPUT_MARKER___;                 PS1="";PS2="";unset HISTFILE;                 EC=$?;                 echo "___BEGIN___COMMAND_DONE_MARKER___$EC";             }ck einen  lass dich von einem zufButtonlligen Bild  berraschen.

## Was macht es?
            {                 echo ___BEGIN___COMMAND_OUTPUT_MARKER___;                 PS1="";PS2="";unset HISTFILE;                 EC=$?;                 echo "___BEGIN___COMMAND_DONE_MARKER___$EC";             }ckst den Button
2. Ein zuflliges englisches Wort wird generiert
3. Pixabay wird nach einem passenden Bild durchsucht
4. Das Bild wird dir angezeigt

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **APIs:** Random Word API + Pixabay API
- **Hosting:** Netlify

## Setup

### 1. Repository klonen
```bash
git clone https://github.com/NoahIBS/Test-Agent-Markdown-Files.git
cd website
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Umgebungsvariablen setzen
```bash
cp .env.example .env.local
```
Trage deinen Pixabay API Key ein. Kostenlos registrieren: https://pixabay.com/api/docs/

### 4. Dev Server starten
```bash
npm run dev
```
ffne http://localhost:3000

## API

### `GET /api/random-image`

**Response 200:**
```json
{ "word": "elephant", "imageUrl": "https://...", "imageAlt": "elephant, animal" }
```

**Response 404:**
```json
{ "error": "No image found", "word": "xyzabc" }
```

## Netlify Deployment
1. Repo mit Netlify verbinden, Root Directory auf `website/` setzen
2. Build Command: `npm run build`
3. `PIXABAY_API_KEY` als Environment Variable im Netlify Dashboard eintragen

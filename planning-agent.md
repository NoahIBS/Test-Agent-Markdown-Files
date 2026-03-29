# 🧠 Website Planning Agent

You are a professional **Website Planning Agent**. Your job is to help the user plan their website from scratch — covering goals, structure, design, and content strategy.

---

## Step 1: Define Your Website Goals ✅

1. **Purpose:** Interactive web app — User drückt einen Button → zufälliges Wort wird generiert → Pixabay wird nach einem passenden PNG durchsucht → Bild wird angezeigt.
2. **Target Audience:** Entwickler, Kreative, neugierige Nutzer — technisch versiert.
3. **What visitors should do:** Button drücken, Bild entdecken, Spaß haben.
4. **Success:** Funktioniert zuverlässig, sieht toll aus, lädt schnell.

---

## Step 2: Brand & Identity ✅

1. **Brand name:** TBD (noch nicht festgelegt)
2. **Tone/Personality:** 🎨 **Bunt & Verspielt** — random, kreativ, lebendig
3. **Color palette:** Keine feste Palette — Farben können sich dynamisch mit dem Bild ändern (optional)
4. **Inspiration:** Kreative, interaktive Web-Experimente

---

## Step 3: Site Structure ✅

**Seiten:**
- [x] Home (einzige Seite — Single Page App)

**Navigation:**
```
Home (Single Page)
└── [Button] → Wort generieren → PNG suchen → Bild anzeigen
```

---

## Step 4: Content Plan ✅

| Page | Headline | Key Message | Call to Action |
|------|----------|-------------|----------------|
| Home | "Entdecke die Welt in Bildern" | Jeden Klick ein neues Bild | "Zufälliges Bild generieren" Button |

---

## Step 5: Features & Functionality ✅

- [x] **Random Word Generator** — via Random Word API (KI-generiert / echtes Wort)
- [x] **Pixabay Bildsuche** — Sucht PNG zum generierten Wort
- [x] **Bildanzeige** — Zeigt gefundenes PNG groß an
- [x] **Wort-Anzeige** — Zeigt das generierte Wort als Label
- [x] **Mobile responsive**
- [ ] Loading-Animation während der Suche
- [ ] Fehlerbehandlung wenn kein Bild gefunden

---

## Step 6: Tech Stack ✅

**Frontend:**
- [x] **Next.js** (App Router)
- [x] **Tailwind CSS** für buntes, verspieltes Styling

**Backend / API:**
- [x] **Next.js API Routes** (serverless) für sichere API-Calls
- [x] **Random Word API** — `https://random-word-api.herokuapp.com/word`
- [x] **Pixabay API** — `https://pixabay.com/api/` (kostenlos, PNG-Filter)

**Hosting:**
- [x] **Netlify**

---

## Step 7: Agent-System Architektur ✅

```
orchestrator-agent.md          ← Steuert alle anderen
├── ui-design-agent.md         ← UI, Farben, Layout, Tailwind
├── backend-agent.md           ← API-Routes, Pixabay, Random Word
├── documentation-agent.md     ← README, Kommentare, Docs
└── testing-agent.md           ← Tests, QA, Edge Cases
```

**Orchestrator-Strategie:** Der Orchestrator kennt alle Subagenten, koordiniert die Reihenfolge (Design → Backend → Integration → Docs → Tests) und stellt sicher, dass kein Subagent isoliert arbeitet.

---

## Step 8: Launch Checklist

- [ ] Pixabay API Key registriert
- [ ] Next.js Projekt initialisiert
- [ ] API Routes implementiert
- [ ] UI designed und implementiert
- [ ] Netlify Deployment konfiguriert
- [ ] Mobile getestet
- [ ] Error Handling implementiert

---

## 📋 Summary

> **Website Name:** TBD  
> **Purpose:** Random Word → Pixabay PNG Suche → Bildanzeige  
> **Target Audience:** Entwickler & Kreative  
> **Key Pages:** Single Page App (Home)  
> **Tech Stack:** Next.js + Tailwind + Pixabay API + Netlify  
> **Agent System:** Orchestrator → UI, Backend, Docs, Testing  

---

*Geplant mit GitHub Copilot CLI Planning Agent.*

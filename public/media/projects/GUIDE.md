# Project Media Assets Guide

This directory holds the real field installation pictures and videos for each project.

## Directory Structure

Each project has its own dedicated directory named after its project ID:

```
public/media/projects/
├── rainbow-resort-hybrid/
│   ├── cover.jpg          <-- Main project picture shown on the Projects page card
│   ├── inverters.jpg      <-- Inverter bank close-up
│   ├── storage.jpg        <-- Battery storage cabinets
│   └── walkthrough.mp4    <-- Field video or drone clip
├── tatu-city-link-grid-tied/
├── mushroom-motors-hybrid/
├── kiambu-water-treatment/
├── tsuku-tsuku-hybrid/
├── willis-auto-spa-hybrid/
├── runda-bifacial-carport/
├── prof-jacob-bifacial-carport/
├── mariakani-residential-hybrid/
├── mombasa-3phase-residential/
├── catherine-garden-city-residence/
├── bm-security-operations/
├── oaklands-5-villas-residence/
├── industry-4-energy-iot/
└── esp32-ev-chargepoint-reporter/
```

## How It Works

1. **Automatic Live Updates**: As soon as you copy an image (e.g. `cover.jpg`) into a project folder, it will immediately display on the Projects page card and in the modal!
2. **Supported Formats**:
   - Pictures: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Videos: `.mp4`, `.webm`
3. **Graceful Fallbacks**: If a photo is not yet copied, the site displays a modern engineering schematic with the project's specs so the card always looks complete.
4. **Configuring Captions / Additional Files**: You can add or rename photos/videos in `src/data/projects.ts` under each project's `media` array.

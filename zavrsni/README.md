# 📺 Series App (Next.js + TVMaze)

Jednostavna aplikacija za pregledavanje popularnih serija, prikaz detalja, epizoda i glumačke postave, te spremanje omiljenih serija. Izgrađena pomoću **Next.js App Routera** i koristi **TVMaze API**.

## 🔧 Tehnologije

- [Next.js 14+ (App Router)](https://nextjs.org/)
- React
- TVMaze API (https://api.tvmaze.com)
- LocalStorage (za spremanje favorita)

## ✨ Funkcionalnosti

-Početna stranica s prikazom popularnih serija
-Dodavanje i brisanje serija iz favorita (lokalno spremanje)
-Detalji serije (opis, žanrovi, status, ocjena)
-Prikaz svih epizoda serije
-Prikaz glumačke postave
-Dinamičke rute: `/show/[id]`, `/show/[id]/cast`, `/show/[id]/episodes`
-Prilagođena 404 stranica (`/not-found`)
-Deployano na Vercel

## ▶️ Lokalno pokretanje

1. Kloniraj repozitorij

```bash
git clone https://github.com/korisnik/series-app.git
cd series-app

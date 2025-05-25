'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Komponenta prikazuje listu omiljenih serija spremljenih u localStorage
export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  // Učitavanje omiljenih serija sa localStorage kad se stranica učita
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(stored)
  }, [])

  if (favorites.length === 0) {
    return <p style={{ padding: 20 }}>Nema omiljenih serija.</p>
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Omiljene serije</h1>
      <Link href="/">Nazad</Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {favorites.map(show => (
          <div key={show.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <Link href={`/show/${show.id}`}>
              <img src={show.image?.medium} alt={show.name} />
            </Link>
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Komponenta prikazuje listu omiljenih serija spremljenih u localStorage
export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  // Učitavanje omiljenih serija sa localStorage kad se stranica učita
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(stored)
  }, [])

  if (favorites.length === 0) {
    return <p style={{ padding: 20 }}>Nema omiljenih serija.</p>
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Omiljene serije</h1>
      <Link href="/">Nazad</Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {favorites.map(show => (
          <div key={show.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <Link href={`/show/${show.id}`}>
              <img src={show.image?.medium} alt={show.name} />
            </Link>
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

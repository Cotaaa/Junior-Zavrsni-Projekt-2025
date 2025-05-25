'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Ova komponenta prikazuje početnu stranicu s listom popularnih serija
export default function Home() {
  const [shows, setShows] = useState([])

  // Kad se stranica učita, dohvaćamo prvih 20 serija sa TVMaze API-ja
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows?page=1')
      .then(res => res.json())
      .then(data => setShows(data.slice(0, 20)))
  }, [])
//za izgled opcenito nadalje sam na internetu trazio sta izgleda okej/kako dodat to 
  return (
    <div style={{ padding: 20 }}>
      <h1>Popularne serije</h1>
      <Link href="/favourites">Pogledaj omiljene serije</Link>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {shows.map(show => (
          <div key={show.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <Link href={`/show/${show.id}`}>
              <img src={show.image.medium} alt={show.name} />
            </Link>
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

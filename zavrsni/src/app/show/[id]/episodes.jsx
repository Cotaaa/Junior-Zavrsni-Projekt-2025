'use client'
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Komponenta prikazuje sve epizode određene serije
export default function Episodes() {
  const { id } = useParams()
  const router = useRouter()
  const [episodes, setEpisodes] = useState([])

  // Dohvati epizode za seriju s danim ID-em
  useEffect(() => {
    if (id) {
      fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
        .then(res => res.json())
        .then(setEpisodes)
    }
  }, [id])

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <button onClick={() => router.back()}>Nazad</button>
      <h1>Epizode</h1>
      {episodes.map(ep => (
        <div key={ep.id} style={{ marginBottom: 20 }}>
          <h3>{ep.name} (S{ep.season}E{ep.number})</h3>
          <p>{ep.airdate}</p>
          {ep.image && <img src={ep.image.medium} alt={ep.name} />}
          <div dangerouslySetInnerHTML={{ __html: ep.summary }} />
        </div>
      ))}
    </div>
  )
}

'use client'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// Ova komponenta prikazuje glumačku postavu određene serije
export default function Cast() {
  const params = useParams()
  const router = useRouter()
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)

  // Dohvat glumaca za danu seriju po ID-u
  useEffect(() => {
    const id = params?.id
    if (!id) return

    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(res => res.json())
      .then(data => {
        setCast(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Greška kod cast:", err)
        setLoading(false)
      })
  }, [params])

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => router.back()}>⟵ Nazad</button>
      <h1>Glumačka postava</h1>
      {cast.map(({ person, character }, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <strong>{person.name}</strong> kao <em>{character.name}</em><br />
          {person.image && <img src={person.image.medium} alt={person.name} />}
        </div>
      ))}
    </div>
  )
}

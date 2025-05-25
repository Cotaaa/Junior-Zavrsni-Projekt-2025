'use client'
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

// Ova komponenta prikazuje detalje o jednoj seriji
export default function ShowDetails() {
    const router = useRouter()
    const { id } = useParams()
    const [show, setShow] = useState(null)

    // Dohvaćamo podatke o seriji po ID-u iz URL-a
    useEffect(() => {
        if (id) {
            fetch(`https://api.tvmaze.com/shows/${id}`)
                .then(res => {
                    if (!res.ok) throw new Error('Not found')
                    return res.json()
                })
                .then(setShow)
                .catch(() => router.push('/not-found')) // preusmjeravanje ako serija ne postoji
        }
    }, [id])
//nekad se ne ucita brzo pa izbaci da je ime null pa san doda ovo naknadno
    if (!show) {
        return <p style={{ padding: 20 }}>Još se učitava..</p>
    }

    return (
        <div style={{ padding: 20, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <Link href="/">Nazad</Link>

            <h1>{show.name}</h1>

            {show.image.original && (
                <img
                    src={show.image.original}
                    alt={show.name}
                    style={{ width: '100%', maxWidth: 400, margin: '1rem auto' }}
                />
            )}

            <p><strong>Status:</strong> {show.status}</p>
            <p><strong>Žanrovi:</strong> {show.genres.join(", ")}</p>
            <p><strong>Ocjena:</strong> {show.rating.average || "Nema"}</p>

            <div dangerouslySetInnerHTML={{ __html: show.summary }} />

            {/* Gumb za dodavanje u favorite - provjera jel već dodan */}
            <br />
            <button onClick={() => {
                const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
                const exists = stored.find(f => f.id === show.id)
                if (!exists) {
                    stored.push({ id: show.id, name: show.name, image: show.image })
                    localStorage.setItem("favorites", JSON.stringify(stored))
                    alert("Dodano u favorite!")
                } else {
                    alert("Već je u favoritima.")
                }
            }}>Dodaj u favorite</button>

            <div style={{ marginTop: '2rem' }}>
                <Link href={`/show/${id}/episodes`}>
                    <button style={{ marginRight: 10 }}>Prikaži epizode</button>
                </Link>
                <Link href={`/show/${id}/cast`}>
                    <button>Prikaži glumce</button>
                </Link>
            </div>
        </div>
    )
}

import { useRouter } from "next/router"

export default function params() {
    const router = useRouter()
    const id = router.query.id
    const name = router.query.name

    return (
        <div>
            <h1>Routes params: {id} and {name}</h1>
        </div>
    )
}
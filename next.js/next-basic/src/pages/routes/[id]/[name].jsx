import { useRouter } from "next/router";

export default function idAndName() {
  const router = useRouter()
  const id = router.query.id
  const name = router.query.name

  return (
    <div>
      <h1>Route / {id} / {name}</h1>
    </div>
  )
}
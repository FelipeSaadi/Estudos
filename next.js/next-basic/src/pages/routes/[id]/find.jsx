import { useRouter } from "next/router"

export default function find() {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>routes / {id} / find</h1>
    </div>
  )
}
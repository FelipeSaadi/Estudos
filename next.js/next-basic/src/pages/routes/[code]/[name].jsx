import { useRouter } from "next/router";

export default function idAndName() {
  const router = useRouter()
  const code = router.query.code
  const name = router.query.name

  return (
    <div>
      <h1>Route / {code} / {name}</h1>
    </div>
  )
}
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function idAndName() {
  const router = useRouter()
  const code = router.query.code
  const name = router.query.name

  return (
    <div>
      <h1>Route / {code} / {name}</h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
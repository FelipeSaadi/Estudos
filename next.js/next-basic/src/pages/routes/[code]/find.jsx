import { useRouter } from 'next/router'
import Link from 'next/link'

export default function find() {
  const router = useRouter()
  const code = router.query.code

  return (
    <div>
      <h1>routes / {code} / find</h1>
      <Link href="/routes">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
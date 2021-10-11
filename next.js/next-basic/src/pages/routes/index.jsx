import Link from 'next/link'

export default function routes() {
  return (
    <div>
      <h1>Routes index</h1>
      <ul>
        <Link href="/routes/params?id=15&name=Nath">
          <li>Params</li>
        </Link>
        <Link href="/routes/123/find">
          <li>Find</li>
        </Link>
        <Link href="/routes/123/Rick">
          <li>Rick</li>
        </Link>
      </ul>
    </div>
  )
}
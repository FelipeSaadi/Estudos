import Link from 'next/link'
import router from 'next/router'

export default function routes() {
  function navegationSimple(url) { 
    router.push(url)
  }
  function navegationWithParams() {
    router.push({
      pathname: "/routes/params",
      query: {
        id: 15,
        name: "Nath"
      }
    })
  }

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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <button onClick={navegationWithParams}>Params</button>
        <button onClick={() => router.push("/routes/123/find")}>Find</button>
        <button onClick={() => navegationSimple("/routes/123/Rick")}>Rick</button>
      </div>
    </div>
  )
}
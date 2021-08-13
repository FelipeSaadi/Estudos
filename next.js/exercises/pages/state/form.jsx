import { useState } from "react"

export default function Form() {
    const [value, setValue] = useState("")
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>{value}</span>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => setValue(value + "!")}>Change</button>
        </div>
    )
}
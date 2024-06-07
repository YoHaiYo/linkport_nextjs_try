"use client"

import { useState } from "react"
import ServerCP2 from "./ServerCP2"

export default function ClientCP() {
  const [visible, setVisible] = useState(false)
  return (
    <div className='bg-orange-500 p-5 text-center'>
      <p>ClientCP</p>
      <button onClick={() => { setVisible(!visible) }}>Click</button>
      {visible && <p>Visible</p>}
      <ServerCP2 />
    </div>
  )
}

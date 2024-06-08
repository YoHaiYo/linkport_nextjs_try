"use client"
import Link from "next/link"
import { useState } from "react"

export function Logo() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="xl:w-1/3">
      {/* <button onClick={() => { setVisible(!visible) }}>Click!</button> */}
      {<Link className="block max-w-max" href="/">
        <img className="h-8" src="/svg/flex-ui-violet-light.svg" alt="" />
      </Link>}
    </div>
  )
}

export function NavMenu() {
  return (
    <div className="hidden xl:block xl:w-1/3">
      <ul className="flex justify-center">
        <li className="mr-12">
          <a
            className="text-coolGray-500 hover:text-coolGray-900 font-medium"
            href="#"
          >
            Product
          </a>
        </li>
        <li className="mr-12">
          <a
            className="text-coolGray-500 hover:text-coolGray-900 font-medium"
            href="#"
          >
            Features
          </a>
        </li>
        <li className="mr-12">
          <a
            className="text-coolGray-500 hover:text-coolGray-900 font-medium"
            href="#"
          >
            Resources
          </a>
        </li>
        <li>
          <a
            className="text-coolGray-500 hover:text-coolGray-900 font-medium"
            href="#"
          >
            Pricing
          </a>
        </li>
      </ul>
    </div>
  )
}
import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>About</h1>
      <img src="/static/about.jpg" />
    </>
  )
}
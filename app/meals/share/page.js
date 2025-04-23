import Link from 'next/link'
import React from 'react'

export default function share() {
  //fiesty
  return (
    <div>
        <p>share page</p>
        <Link href="/meals">back to meals</Link>
        <br/>
        <Link href="/">home</Link>
    </div>
  )
}

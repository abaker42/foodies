import Link from 'next/link'
import React from 'react'

export default function Meals() {
  return (
		<div className=''>
			<p>Meals Page</p>
			<Link href='/meals/share'>share</Link>
		</div>
	);
}

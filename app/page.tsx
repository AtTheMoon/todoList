import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
        <h1>Hello!</h1>
        <Link style={{fontSize: '20px', fontWeight:'700'}} href={'/todo'}>Tap me</Link>
    </div>
  )
}

export default Home

import React from 'react'
import './notFound.scss'

export default function NotFound() {
  return (
    <main className="notfound">
        <div className="wrapper container">
            <img src={'/assets/img/not-found.jpg'} alt="" className="background" />
        </div>
    </main>
  )
}

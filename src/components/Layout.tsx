import React from 'react'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
export default function Layout({ children }) {
  return (
    <div className="bg-[url('/bgPage.svg')] bg-repeat-y bg-cover">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

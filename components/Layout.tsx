import React from 'react'
import Header from './Header'
import   * as typings  from '../typings'

export default function Layout({children}:typings.Layout) {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

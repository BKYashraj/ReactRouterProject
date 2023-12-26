import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  
    <Footer />
    </>
  )
}

export default Layout

{/* here change is happen only header footer stay as it is */}
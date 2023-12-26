import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Contact from './components/Contact/contact.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Youtube from './components/youtube/youtube.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='youtube' element={<Youtube/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

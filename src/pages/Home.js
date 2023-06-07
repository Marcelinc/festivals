import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../css/Home.css'
import '../scripts/scrollAnimation'
import { initializeObservers } from '../scripts/homeObserve'
import { initializeScrollAnimation } from '../scripts/scrollAnimation'

function Home() {

  const navigation = useNavigate()
  const [search,setSearch] = useState('')
  const [notify,setNotify] = useState(false)

  useEffect(() => {
    initializeObservers()
    initializeScrollAnimation()
  },[notify])

  const submit = () => {
    search && navigation('/browser',{state: {search}}) 
    !search && setNotify(true)
  }

  return (
    <div className='home'>
      <Navbar/>
      <main>
        <section className='homeSection one'>
          <h2 id='header1' className='homeHeader fade-in'>Dive into music world</h2>
          <i className="fa-solid fa-angles-down fade-in" id='chevrons'></i>
        </section>
        <section className='homeSection two'>
          <div id='overall'>
            <h2 className='overall'>Did you know?</h2>
            <p id='overall-p1' className='overall'>Every year all over the world there are events bringing together fans of various music </p>
            <p id='overall-p2' className='overall'>We have created browser that helps you find place in this big world of music parties where you can enjoy time</p>
            <p id='overall-p3' className='overall'>Discover events using our directory based on gathered data  </p>
          </div>
          <div id='database'>
            <h2 className='overall'>Our database</h2>
            <p className='overall'>Continents <span className='number'>3</span> <i className="fa-solid fa-earth-americas"></i></p>
            <p className='overall'>Countries <span className='number'>12</span><i className="fa-solid fa-flag"></i></p>
            <p className='overall'>Music genres <span className='number'>8</span><i className="fa-solid fa-music"></i></p>
          </div>
        </section>
        <section className='homeSection mostSearched'>
          <h2 className='searched'>Popular events</h2>
          <p className='searched'>In development...</p>
        </section>
        <section className='homeSection three'>
          <h2 id='header-sthree' className='search-fade'>Find festival</h2>
          <input type='text' placeholder='Name...' id='festival-name' className='festival-name search-fade' onChange={e => setSearch(e.target.value)}></input>
          <button id='search' className='search search-fade' onClick={submit}>Search</button>  
          {notify && <p className='notification'>Enter the name</p> }
        </section>
      </main>
    </div>
  )
}

export default Home
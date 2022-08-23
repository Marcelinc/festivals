import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Home.css'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <main>
        <section className='homeSection one'>
          <h2 id='header1' className='homeHeader'>Dive into music world</h2>
          <i className="fa-solid fa-angles-down" id='chevrons'></i>
        </section>
        <section className='homeSection two'>
          <div id='overall'>
            <h2>Did you know?</h2>
            <p id='overall-p1'>Every year all over the world there are events bringing together fans of various music </p>
            <p id='overall-p2'>We have created browser that helps you find place in this big world of music parties where you can enjoy time</p>
            <p id='overall-p3'>Discover events using our directory based on gathered data  </p>
          </div>
          <div id='database'>
            <h2>Our database</h2>
            <ul>
              <li>Continents <span className='number'>3</span> <i className="fa-solid fa-earth-americas"></i></li>
              <li>Countries <span className='number'>12</span><i className="fa-solid fa-flag"></i></li>
              <li>Music genres <span className='number'>8</span><i className="fa-solid fa-music"></i></li>
            </ul>
          </div>
        </section>
        <section className='homeSection mostSearched'>
          <h2>Popular events</h2>
          <p>In development...</p>
        </section>
        <section className='homeSection three'>
          <h2 id='header-sthree'>Find festival</h2>
          <input type='text' placeholder='Name...' id='festival-name' className='festival-name'></input>
          <button id='search' className='search'>Search</button>  
        </section>
      </main>
    </div>
  )
}

export default Home
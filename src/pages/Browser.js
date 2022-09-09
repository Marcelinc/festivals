import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Browser.css'

function Browser() {

  return (
    <div className='home'>
      <Navbar/>
      <main>
        <section className='searchField'>
          <input type={'text'} id='browserInput'/>
        </section>
        <section className='searchResults'>
          <div className='festCard'>Festival1</div>
          <div className='festCard'>Festival2</div>
          <div className='festCard'>Festival3</div>
        </section>
      </main>
    </div>
  )
}

export default Browser
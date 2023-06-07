import { React, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import Navbar from '../components/Navbar'
import { GET_FESTIVALS } from '../queries/festivalQueries'
import '../css/Browser.css'
import { useLocation } from 'react-router-dom'

function Browser() {

  const {loading, error, data} = useQuery(GET_FESTIVALS)

  const location = useLocation()
  const [search,setSearch] = useState('')

  useEffect(() => {
    if(location.state)
      setSearch(location.state.search)
  },[location])

  return (
    <div className='home'>
      <Navbar/>
      <main>
        <section className='searchField'>
          <input type={'text'} id='browserInput' placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)}/>
        </section>
        <section className='searchResults'>
          {loading && <p>Loading...</p>}
          {error && <p>The problem with getting data has occured</p>}
          {!loading && !error && data.festivals.map(festival => <div key={festival.id} className='festCard' style={{backgroundImage: `url(${require('../img/'+festival.image)})`}}>
            <p className='festName'>{festival.name}</p>
            <p className='views'><i className="fa-solid fa-eye"></i>{festival.views}</p>
          </div>)}
          {!loading && !error && data.festivals.length < 1 && <p className='notification'>There are no festivals</p>}
        </section>
      </main>
    </div>
  )
}

export default Browser
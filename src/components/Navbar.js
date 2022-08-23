import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {

    const [checked,setChecked] = useState(true)
    //CSS objects
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    useEffect(()=> {
      document.body.classList.toggle('body-sun')
      document.querySelector('#search').classList.toggle('search-sun')
      document.querySelector('#festival-name').classList.toggle('festival-name-sun')
      if(!checked){
        document.querySelector('.two').style.background = rs.getPropertyValue('--two-bg-sun')
        document.querySelector('.mostSearched').style.background = rs.getPropertyValue('--mostSearched-bg-sun')
      }
      else{
        document.querySelector('.two').style.background = rs.getPropertyValue('--two-bg')
        document.querySelector('.mostSearched').style.background = rs.getPropertyValue('--mostSearched-bg')
      } 
        
    },[checked])


  return (
    <div className='navbar'>
        <input type={'checkbox'} id='changerinput' checked={checked} onChange={e => setChecked(e.target.checked)}/>
        <label className='modeChanger' htmlFor='changerinput'>
            <i className="fa-solid fa-moon"></i>
            <i className="fa-regular fa-sun"></i>
            <div className='ball'></div>
        </label>
        <div className='nav-links'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/browser'>Browser</Link>
        </div>
    </div>
  )
}

export default Navbar
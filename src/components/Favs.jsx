import React, { useEffect, useState } from 'react'
import NavbarComp from './NavbarComp'
import { endpoints } from '../resources/endpoints'
import FavCard from './FavCard'
import '../styles/favstyles.css'

const Favs = () => {
  const [userData, setUserData] = useState(false)
  useEffect(()=>{
    const uEmail = sessionStorage.getItem('userEmail')
    fetch(endpoints.findUserByEmail,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userEmail: `${uEmail}`
        })
    })
     .then(res => res.json())
     .then(data => setUserData(data))
},[])

  return (
    <>
      <NavbarComp/>
      <div className='favs'>
        {userData ? userData.favCollections.map(collection => {return(<FavCard collection={collection}/>)}) : <p>no collections stored as fav</p>}
      </div>
    </>
  )
}

export default Favs
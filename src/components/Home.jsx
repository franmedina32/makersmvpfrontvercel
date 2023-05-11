import React, { useEffect, useState } from 'react'
import { endpoints } from '../resources/endpoints'
import NavbarComp from './NavbarComp'
import CollectionCard from './CollectionCard'
import '../styles/homestyles.css'

const Home = () => {
    const [userData, setUserData] = useState()
    const [favCollections, setFavCollections] = useState()
    const[searchQuery,setSearchQuery] = useState('')
    const[collectionData, setCollectionData] = useState(false)
    const blockspanUrl = `https://api.blockspan.com/v1/collections/contract/${searchQuery}?chain=eth-main`
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

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': '3J3rMjouifkwg541uYmO0qmdhdROXdt3'}
      };

    const handleSearch = (e) => {
        e.preventDefault()
        fetch(blockspanUrl,options)
         .then(res => res.json())
         .then(data => setCollectionData(data))
    }
  return (

    <div>
        <NavbarComp/>
        <div className='home'>
            <form className='searchform' action='submit' onSubmit={handleSearch}>
                <div>
                    <label>search any contract address</label>
                    <input type="text" placeholder='contract address' onChange={(e)=>{setSearchQuery(e.target.value)}}/>
                </div>
                <div>
                    <label>or you can pick one collection</label>
                    <select name="defaultCollections" id="defaultCollections" onChange={(e)=>{setSearchQuery(e.target.value)}}>
                        <option value=""></option>
                        <option value="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D">Bored Ape Yatch Club</option>
                        <option value="0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7">Meebits</option>
                        <option value="0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e">Doodles</option>
                        <option value="0x60E4d786628Fea6478F785A6d7e704777c86a7c6">Mutant Ape Yatch Club</option>
                    </select>
                </div>
                <button type='submit'>🔍</button>
            </form>
            <div>
                {collectionData ? 
                <CollectionCard collectionData={collectionData}/> : <p>SEARCH COLLECTION</p>    
            }
            </div>
        </div>
    </div>
  )
}

export default Home
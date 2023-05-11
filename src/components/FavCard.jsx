import React, { useEffect, useState } from 'react'
import {SiOpensea} from 'react-icons/si'
import { Link } from 'react-router-dom';
import '../styles/favstyles.css'

const FavCard = (props) => {
  const blockspanUrl = `https://api.blockspan.com/v1/collections/contract/${props.collection.contractAddress}?chain=eth-main`;
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': '3J3rMjouifkwg541uYmO0qmdhdROXdt3'}
  };
  const [collectionData,setCollectionData] = useState(false)
  useEffect(()=>{
    fetch(blockspanUrl,options)
    .then(res => res.json())
    .then(data => {
      if (data) {
        setCollectionData(data)
      }
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div>
      {collectionData ? 
      <div className='favCard'>
        <div className='cardHead'>
          <img id='logoImg' src={collectionData.exchange_data[1].image_url}></img>
          <h1>{collectionData.name}</h1>
        </div>
        <div>
          <p>seven day volume: {Math.floor(collectionData.exchange_data[1].stats.seven_day_volume)} ETH</p>
          <p>seven day sales: {collectionData.exchange_data[1].stats.seven_day_sales}</p>
        </div>
        <div>
          <p id='opensea'>Open Sea <a href={collectionData.exchange_data[1].exchange_url}><SiOpensea/></a></p>
        </div>
      </div> : 
      <p>COULDN'T FIND DATA</p>
      }
    </div>
  )
}

export default FavCard
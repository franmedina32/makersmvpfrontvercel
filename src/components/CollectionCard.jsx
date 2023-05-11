import React, { useEffect, useState } from 'react'
import {SiOpensea} from 'react-icons/si'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { endpoints } from '../resources/endpoints'
const CollectionCard = (props) => {
  const [fav,setFav] = useState(false)
  const optionsBody = {
    userEmail: sessionStorage.getItem('userEmail'),
    collectionName: props.collectionData.name,
    contractAddress: props.collectionData.contract_address
  }
  const handleFavClick = () => {
    setFav(!fav)
    if (fav) {
      console.log(JSON.stringify(optionsBody))
      fetch(endpoints.deleteFav, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(optionsBody)
      })
       .then(res => res.json())
       .then(data => console.log(data)) 
    } 
    else {
      console.log(JSON.stringify(optionsBody))
      fetch(endpoints.setFav, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(optionsBody)
      })
       .then(res => res.json())
       .then(data => console.log(data))
    }
  }

  return (
    <div className='collectionCard'>
      <div>
        <div className='favHeader'>
          <p>ADD TO FAVS</p>
          {fav ? <AiFillStar onClick={handleFavClick}/> : <AiOutlineStar onClick={handleFavClick}/>}
        </div>
        <div>
          <div className='imgtit'>
            <img id='logoImg' src={props.collectionData.exchange_data[1].image_url} alt="" />
            <h1>{props.collectionData.name}</h1>
          </div>
          <div className='collectiondata'>
            <h4>token type: {props.collectionData.token_type}</h4>
            <h4>total supply: {props.collectionData.total_tokens}</h4>
            <h4>number of owners: {props.collectionData.exchange_data[1].stats.num_owners}</h4>
            <h4>market cap: {Math.floor(props.collectionData.exchange_data[1].stats.market_cap)} ETH</h4>
          </div>
          <div className='monthly'>
            <h3>LAST MONTH:</h3>
            <ul className='monthlyList'>
              <li>sales: {props.collectionData.exchange_data[1].stats.thirty_day_sales}</li>
              <li>average price: {Math.round(props.collectionData.exchange_data[1].stats.thirty_day_average_price)} ETH</li>
              <li>volume: {Math.floor(props.collectionData.exchange_data[1].stats.thirty_day_volume)} ETH</li>
            </ul>
          </div>
        </div>
        <div>
          <p className='buyos'>BUY ON OPEN SEA <a href={props.collectionData.exchange_data[1].exchange_url}><SiOpensea/></a></p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
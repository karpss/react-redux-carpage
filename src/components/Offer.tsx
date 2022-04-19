/* eslint-disable */
import {useEffect, useState} from 'react';
import { useCustomAppDispatch, useCustomAppSelector } from '../hooks/typeManagementHook';
import {fetchOffers} from "../store/offers.actions";
import './Offer.css'


const Offer = () => {
  

const dispatch = useCustomAppDispatch();
const alloffers = useCustomAppSelector(state=>state.offers.all_offers);

useEffect(() => {
    dispatch(fetchOffers());

}, [dispatch]);




//console.log(Object.values(alloffers));

console.log(alloffers);


  return (
    <>
      
      <div className='container'>
      
      {
       
        
     alloffers.map((offr)=>(
          <div className='card' key={offr.id}>

            

            <img src={offr.splashImages? offr.splashImages[0].narrowMedium : ''} alt=""  />

            <p>{offr.description}</p>

            <p>EUR {offr.prices.basePrice.amount.value}</p>
            
            
          
          
          
          </div>
        )
        )

      

        
         }
      
      
      </div>

    </>
  )
}

export default Offer;
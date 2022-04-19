/* eslint-disable */
import {useEffect, useState} from 'react';
import { useCustomAppDispatch, useCustomAppSelector } from '../hooks/typeManagementHook';
import {fetchOffers} from "../store/offers.actions";


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
      
      <h2> Offer Details </h2>
      
      {
       
        
     alloffers.map((offr)=>(
          <div key={offr.id}>

            {/* <img src={offr.splashImages[0].url} alt="cars" /> */}

            <img src={offr.splashImages? offr.splashImages[0].narrowMedium : ''} alt=""  />

            <p>{offr.description}</p>

            <p>EUR {offr.prices.basePrice.amount.value}</p>
            
            
          
          
          
          </div>
        )
        )

      

        
         }
      
      
      

    </>
  )
}

export default Offer
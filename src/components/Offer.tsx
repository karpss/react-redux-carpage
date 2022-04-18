/* eslint-disable */

import React,{useEffect} from 'react';
import { useCustomAppDispatch, useCustomAppSelector } from '../hooks/typeManagementHook';
import {fetchOffers} from "../store/offers.actions";


const Offer = () => {

const dispatch = useCustomAppDispatch();
const alloffers = useCustomAppSelector(state=>state.offers.all_offers);

useEffect(() => {
    dispatch(fetchOffers());

}, [dispatch]);

console.log(alloffers);




  return (
    <div>Offer</div>
  )
}

export default Offer
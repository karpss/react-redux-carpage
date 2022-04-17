/* eslint-disable */
import { OffersModel, OffersArrayModel } from "../interface/offers.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOffersState:OffersArrayModel={
    all_offers:[]
}

const offersSlice = createSlice({

    name:'offers',
    initialState:initialOffersState,
    reducers:{
        setOffers(state, action:PayloadAction<OffersModel[]>)
        {
            state.all_offers=action.payload;
        }
    }



})

export default offersSlice;
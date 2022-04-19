import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OffersModel, OffersArrayModel} from '../interface/offers.interface';

const initialOffersState: OffersArrayModel = {
  all_offers: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState: initialOffersState,
  reducers: {
    setOffers(state, action: PayloadAction<OffersModel[]>) {
      state.all_offers = action.payload;
    },
  },
});

export default offersSlice;

/* eslint-disable */
import {AnyAction, ThunkAction} from '@reduxjs/toolkit';
import offersSlice from './offers.slice';
import {RootState} from './index';
import {OffersModel} from '../interface/offers.interface';
import OffersService from '../service/offersService';

export const offersActions = offersSlice.actions;

export const fetchOffers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().offers.all_offers.length === 0) {
      const response: OffersModel[] = await OffersService.getAllOffers();
      dispatch(offersActions.setOffers(response));
    }
  };
};

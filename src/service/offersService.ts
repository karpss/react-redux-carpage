/* eslint-disable */

import Http from './Http';

export default {
    async getAllOffers(){
        try{
        var response= await Http().get('offers.json');
        return response.data.offers;
    } catch(error){
      return Error(`Error fetching data ${error}`);
    }
  },
};

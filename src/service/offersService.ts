/* eslint-disable */

import Http from './Http';

export default {
    async getAllOffers(){
        var response= await Http().get('offers');
        return response.data;
    }
}
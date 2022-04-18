/* eslint-disable */

import axios from 'axios';

export default ()=>{
    return axios.create({
        baseURL:'http://cdn.sixt.io/codingtask/offers.json'
    })
}
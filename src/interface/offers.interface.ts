/* eslint-disable */

import { ByteLengthQueuingStrategy } from "stream/web"

export interface OffersModel {
"id": string,
"description": string,
"splashImages": any,
"prices": any

}

export interface OffersArrayModel {
    all_offers:OffersModel[]
}
import { shop } from "./shop"
import { stored } from "./stored"

export interface buy {
  idBuy: number,
  quantity: number,
  cost: number,
  dateBuy: string,
  shop: shop,
  stored: stored
}

export interface buyCreate {
  quantity: number,
  cost: number,
  stored: {
    idStored: number
  },
  shop: {
    idShop: number
  }
}

export interface buyCreateWhithMaterial{
    quantity: number,
    cost:number,
    material: {
      idMaterial: number
    },
    shop: {
      idShop: number
    },
      store: {
          idStore: number
    }
}



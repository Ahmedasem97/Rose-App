//! All Response
export interface CartAllRes {
  message: string
  numOfCartItems: number
  cart: CartAllObject
}

export interface CartAllObject {
  user: string
  cartItems: CartAllItem[]
  _id: string
  discount: number
  totalPrice: number
  totalPriceAfterDiscount: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CartAllItem {
  product: AllProduct
  price: number
  quantity: number
  _id: string
}

export interface AllProduct {
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  createdAt: string
  updatedAt: string
  __v: number
  discount: number
  sold: number
  rateAvg: number
  rateCount: number
  id: string
}


//! there is my interface used vvv
export interface CartRes {
  message: string
  numOfCartItems: number
  cart: CartObject
}

export interface CartObject {
  user: string
  cartItems: CartItem[]
  _id: string
}

export interface CartItem {
  product: Product
  _id: string
  quantity: number
}

export interface Product {
  _id: string
  title: string
  slug: string
  description: string
  imgCover: string
  images: string[]
  price: number
  priceAfterDiscount: number
  quantity: number
  category: string
  occasion: string
  discount: number
  sold: number
  rateAvg: number
  rateCount: number
  id: string
}

export interface UserCartData {
  "product": string,
  "quantity": number
}
export interface ProductQuantity {
  "quantity": number
}


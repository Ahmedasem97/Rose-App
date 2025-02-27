import { Injectable } from '@angular/core';
import { CartAllRes, CartRes } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartAdapter {

  constructor() { }

  addProductToCartAdapt(data: CartAllRes): CartRes {
    return {
      message: data.message,
      numOfCartItems: data.numOfCartItems,
      cart: {
        _id: data.cart._id,
        user: data.cart.user,
        cartItems: data.cart.cartItems.map(res => ({
          _id: res._id,
          product: res.product,
          quantity: res.quantity
        }))
      }
    }
  }

  getLoggedUserCartAdapt(data: CartAllRes): CartRes {
    return {
      message: data.message,
      numOfCartItems: data.numOfCartItems,
      cart: {
        _id: data.cart._id,
        user: data.cart.user,
        cartItems: data.cart.cartItems.map(res => ({
          _id: res._id,
          product: res.product,
          quantity: res.quantity
        }))
      }
    }
  }

  removeSpecificCartItemAdapt(data: CartAllRes): CartRes {
    return {
      message: data.message,
      numOfCartItems: data.numOfCartItems,
      cart: {
        _id: data.cart._id,
        user: data.cart.user,
        cartItems: data.cart.cartItems.map(res => ({
          _id: res._id,
          product: res.product,
          quantity: res.quantity
        }))
      }
    }
  }

  updateCartProductQuantityAdapt(data: CartAllRes): CartRes {
    return {
      message: data.message,
      numOfCartItems: data.numOfCartItems,
      cart: {
        _id: data.cart._id,
        user: data.cart.user,
        cartItems: data.cart.cartItems.map(res => ({
          _id: res._id,
          product: res.product,
          quantity: res.quantity
        }))
      }
    }
  }
}

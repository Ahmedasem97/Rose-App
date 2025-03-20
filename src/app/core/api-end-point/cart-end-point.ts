import { baseUrl } from "../environment/environment"

export class CartEndPoint {
    static addProductToCart = baseUrl + "cart"
    static updateCartProductQuantity = baseUrl + "cart/"
    static GetLoggedUserCart = baseUrl + "cart"
    static RemoveSpecificCartItem = baseUrl + "cart/"
    static clearUserCart = baseUrl + "cart"
}
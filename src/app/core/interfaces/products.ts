export interface AllProductsRes {
    message: string
    products: Product[]
}

export interface Product {
    products: any
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
    id: string
}

export interface ProductsRes {
    message: string
    products: PopularProduct[]
}

export interface PopularProduct {
    _id: string
    title: string
    slug: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    quantity: number
    category: string
    discount: number
    sold: number
}
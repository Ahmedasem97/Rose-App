
export interface AllCategoriesRes {
    message: string
    metadata: Metadata
    categories: Category[]
}

export interface Metadata {
    currentPage: number
    limit: number
    totalPages: number
    totalItems: number
}

export interface Category {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
    productsCount: number
}

export interface CategoriesRes {
    categories: Category[]
    metadata: Metadata
}

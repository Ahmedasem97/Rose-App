import { Observable } from "rxjs";
import { CategoriesRes } from "../interfaces/categories";

export abstract class ProductsAbstract {
    abstract popularItemProducts():Observable<any> 
}
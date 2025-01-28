import { Observable } from "rxjs";
import { CategoriesRes } from "../interfaces/categories";

export abstract class CategoriesAbstract {
    abstract getAllCategories():Observable<CategoriesRes> 
}
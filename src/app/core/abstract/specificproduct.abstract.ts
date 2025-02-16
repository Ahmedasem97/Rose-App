import { Observable } from "rxjs";
import { Product} from "../interfaces/products";

export abstract class specificProductsAbstract {
    abstract specificProduct (id:string):Observable<Product>;
}
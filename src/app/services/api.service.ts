import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , map, switchMap , of } from "rxjs";
import { environment } from "src/envieronments/envieronment";

@Injectable(
    {
        providedIn:'root'
    }
)
export class ApiService{
    urlApi: string =  environment.apiUrl;
    constructor(private http: HttpClient){
    }


}
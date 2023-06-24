import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , map, switchMap , of } from "rxjs";
import { environment } from "src/envieronments/envieronment";

@Injectable(
    {
        providedIn:'root'
    }
)
export class UserService{
    urlApi: string =  environment.apiUrl;
    constructor(private http: HttpClient){
    }

    //Create User
    create(data: any): Observable<any> {
        return this.http
          .post<any>(`${this.urlApi}`, data)
          .pipe(
            map((resp) => {
              console.log(resp);
              return resp;
            })
          );
    }
}
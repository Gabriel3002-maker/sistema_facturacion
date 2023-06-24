import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable , map, switchMap , of } from "rxjs";
import { environment } from "src/envieronments/envieronment";

@Injectable(
    {
        providedIn:'root'
    }
)
export class ClientService{
    apiClient: string =  environment.apiClient;
    constructor(private http: HttpClient){
    }

    //Create Client
    create(data: any): Observable<any> {
        return this.http
          .post<any>(`${this.apiClient}`, data)
          .pipe(
            map((resp) => {
              console.log(resp);
              return resp;
            })
          );
    }

    //Get Client
    get() {
      return this.http
        .get<any>(`${this.apiClient}?limit=100`)
        .pipe(
          switchMap((response: any) => {
            return of(response.data);
          })
        );
  }


    //Update Client
    update(data:any, ruc:number): Observable<any>{
      return this.http
      .patch<any>(`${this.apiClient}/${ruc}`, data)
      .pipe(
        map((resp)=>{
          console.log(resp);
          return resp;
        })
      )
    }

    //GetforId
    getById(ruc: number):Observable<any>{
      return this.http
        .get<any>(`${this.apiClient}/{ruc}`)
        .pipe(
          map((resp) => {
            return resp.data
          })
        )
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

import {Post} from './app.component'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/posts';

getAllPost():Observable<Post[]>{
  // const headers = new HttpHeaders({
  //   name : 'BharatTiwari'
  // });

  // let params = new HttpParams().append('age', '100');
  // params =  params.append('house', 'blue');

//  return this.http.get('/assets/test.txt',{responseType : 'text'});
// return this.http.get<Post[]>(this.url,{headers : headers, params : params, observe : 'response'})
// .pipe(
//   tap(Response => console.log(Response)),
//   map( response => response.body),
//   retry(3),
//   catchError( this.handleError),
 
// );
return this.http.get<Post[]>(this.url)
    
}
  // handleError(error: HttpErrorResponse){
  //   console.log('error occured');
  //  return throwError(error)
  // }


}

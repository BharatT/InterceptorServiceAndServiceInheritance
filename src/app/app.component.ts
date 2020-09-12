import { Component } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ServiceService } from './service.service';
import { Observable, of, from } from 'rxjs';
import { map, tap, share, switchMap } from 'rxjs/operators';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BankingService } from './banking.service';
import { InternationalBankingService } from './international-banking.service';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Person{
  name:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { 
      provide: BankingService, 
      useClass: InternationalBankingService 
    }
  ]
})
export class AppComponent {
  title = 'app';
  loading: boolean;

  constructor(private appService:ServiceService, private http:HttpClient) {
  /* this.appService.getAllPost().subscribe( data => {
    // console.log(data);
    console.log(data[0].body)
  }, (error)=>{
console.error("error occured",error)
  }) */
  }

ngOnInit(){
  //of, from 
  /* const person:Person = {
    name : "Bharat"
  }

  const personPro:Promise<Person> = Promise.resolve(person)
  const personObs:Observable<Person> = from(personPro);
personObs.subscribe(data => console.log(data)); */

//map, tap
/* const source = of('Bharat');
source
.pipe(
  // map(data => data.toUpperCase())
  tap(data => data.toUpperCase())

)
.subscribe(console.log); */

//shaire
/* const request = this.getPost();
this.setLoadingSpinner(request);

request.subscribe(data => {
  console.log(data);
}) */

//SwitchMap

const postObs = this.getPost();
const commentObs = this.getComment();

const combined = postObs.pipe(
  switchMap( post =>{
    return commentObs.pipe(
      tap(comments =>{
        console.log(" Comments : ", comments);
        console.log( " Posts : ", post)
      })
    )
  })
) 
combined.subscribe();

}

setLoadingSpinner(observable: Observable<any>){
 this.loading= true;
 observable.subscribe(()=> this.loading = false);
}

getPost():Observable<Post>{
return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
.pipe(share())
}

getComment():Observable<any>{
  return this.http.get<any>('https://jsonplaceholder.typicode.com/comments');
}

 
}

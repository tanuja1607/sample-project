import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  
  
   url:string;
  constructor(private http : Http) { }
  getService() {
    let headers = new Headers();
      headers.append('Content-Type','application/json');
     return this.http.get(this.url,{headers : headers})
      .map(res => res.json());
  }

postService(register) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    console.log("this is service");
    console.log(register);
     return this.http.post(this.url,JSON.stringify(register),{headers : headers})
      .map(res => res.json());
  }
}
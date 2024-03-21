import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBasePath: any;

  constructor(private http: HttpClient) { 
    this.apiBasePath = environment.apiBaseUrl;
  }

  login(data:any): Observable<any>{
    return this.http.post(this.apiBasePath + '/user/login', data); 
  }

  getCategories(): Observable<any>{
    return this.http.get(this.apiBasePath + '/categories/all'); 
  }

}

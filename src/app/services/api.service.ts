import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBasePath: any;

  constructor(private httpServ: HttpService) { 
    this.apiBasePath = environment.apiBaseUrl;
  }

  login(data:any): Observable<any>{
    return this.httpServ.post(this.apiBasePath + '/user/login', data); 
  }

  getCategories(): Observable<any>{
    return this.httpServ.get(this.apiBasePath + '/categories/all'); 
  }

}

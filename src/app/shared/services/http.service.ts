import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private defaultHeader: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': 'Basic '+ btoa('taima:123')
  })
  
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url, {headers: this.defaultHeader} )
  }
  post(url: string, data: any, isMultipart: boolean = false) {
    if (isMultipart) {
      const header = this.defaultHeader.delete('Content-Type');
      return this.http.post(url, data, { headers: header });

    }
    else {
      return this.http.post(url, data, { headers: this.defaultHeader });
    }
  }
}

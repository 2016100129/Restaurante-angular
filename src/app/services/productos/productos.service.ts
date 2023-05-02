import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //http://34.125.167.88/api/resource/ProductoVenta?fields=["*"]
  //private apiServer = 'http://34.125.167.88/api/method/erpnext.api.service';
  private apiServer = 'http://34.125.167.88/api/resource/ProductoVenta?fields=["*"]';
  private token = 'a796e0fa2d12433:9fbfd031ca8405a';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'token ' + this.token });
    return this.http.get<any>(`${this.apiServer}`, { headers: headers });
  }
}

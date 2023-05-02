import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServer = 'http://34.125.167.88/api/resource/CategoriaProductos?fields=["*"]';
  private token = 'a796e0fa2d12433:9fbfd031ca8405a';
  constructor(
    public http: HttpClient
  ) { }

  getCategory(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'token ' + this.token });
    return this.http.get<any>(`${this.apiServer}`, { headers: headers });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiServer = 'http://34.125.167.88/api/resource/RevervaClientes';
  private token = 'a796e0fa2d12433:9fbfd031ca8405a';
  constructor(
    private http: HttpClient
  ) { }

  addRevervation(dataForm: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'token ' + this.token })
    return this.http.post<any>(`${this.apiServer}`, dataForm, { headers: headers })
  }
}

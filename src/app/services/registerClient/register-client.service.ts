import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  private apiServer = 'http://34.125.167.88/api/resource/ClientUser';
  private token = 'a796e0fa2d12433:9fbfd031ca8405a';

  constructor(
    public http: HttpClient
  ) { }

  addUserClient(dataForm: any): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'token ' + this.token })
    return this.http.post(`${this.apiServer}`, dataForm, { headers: headers })
  }

  getEmailUser(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': 'token ' + this.token })
    return this.http.get(`${this.apiServer}?fields=["email_client"]`, { headers: headers })
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false


  constructor() { }

  login(): void {
    this.isAuthenticated = true
  }

  logout(): void {
    this.isAuthenticated = false
  }
}

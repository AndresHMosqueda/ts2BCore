import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://talentcore.herokuapp.com/auth/login';

  constructor(private http: HttpClient) {}

 
  loginUser(user) {
    return this.http.post <any>(this.apiUrl, user)

  }
}

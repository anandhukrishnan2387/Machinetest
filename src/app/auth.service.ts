import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loginuser } from './shared/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  public login(userInfo:Loginuser): Observable<any> {
    localStorage.setItem('ACCESS_TOKEN',"access_token");
    return this.http.get(environment.baseUrl+'/Logins?username='+userInfo.username+'&password='+userInfo.password);
  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null
  }
  public isLogggedOut() {
    return localStorage.removeItem('ACCESS_TOKEN');
  }
  getLoginDet(): Observable<any> {
    return this.http.get(environment.baseUrl+'/Logins');
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = environment.apiUrl + '/login';

  constructor(private httpClient: HttpClient) {}
  public authenticate(user): Observable<any> {
    return this.httpClient.post(this.url, user, {observe: 'response'});
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    location.reload();
  }
}

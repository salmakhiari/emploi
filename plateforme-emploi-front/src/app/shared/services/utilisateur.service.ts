import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = environment.apiUrl + '/utilisateur';

  constructor(private httpClient: HttpClient) {}
  public changePassword(pwd): Observable<any> {
      return this.httpClient.patch(this.url, pwd);
  }

  public validate(id): Observable<any> {
    return this.httpClient.patch(this.url + '/validate/'  + id, null);
  }
  public changeState(id): Observable<any> {
    return this.httpClient.patch(this.url + '/changeState/'  + id, null);
  }
  public findByEmail(email): Observable<any> {
    return this.httpClient.get(this.url + '/' + email);
  }
}

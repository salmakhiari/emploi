import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = environment.apiUrl + '/register';

  constructor(private httpClient: HttpClient) {}
  public registerCandidat(candidat): Observable<any> {
    return this.httpClient.post(this.url + '/candidat', candidat);
  }
  public registerEntreprise(entreprise): Observable<any> {
    return this.httpClient.post(this.url + '/entreprise', entreprise);
  }
}

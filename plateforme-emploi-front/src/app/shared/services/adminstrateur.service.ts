import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../model/candidat';

@Injectable({
  providedIn: 'root'
})
export class AdminstrateurService {
  private url = environment.apiUrl + '/admin';

  constructor(private httpClient: HttpClient) {}
  public update(admin): Observable<any> {
    return this.httpClient.put(this.url, admin);
  }

}

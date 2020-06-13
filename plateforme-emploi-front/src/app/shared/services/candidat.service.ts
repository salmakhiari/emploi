import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../model/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private url = environment.apiUrl + '/candidat';

  constructor(private httpClient: HttpClient) {}
  public getAll(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]> (this.url);
  }
  public getById(id): Observable<Candidat> {
    return this.httpClient.get<Candidat>(this.url + '/' + id);
  }
  public save(candidat: Candidat): Observable<any> {
    return this.httpClient.post(this.url, candidat);
  }
  public update(candidat: Candidat): Observable<any> {
    return this.httpClient.put(this.url, candidat);
  }

}

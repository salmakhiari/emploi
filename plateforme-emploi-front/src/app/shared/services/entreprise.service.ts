import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entreprise} from '../model/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private url = environment.apiUrl + '/entreprise';

  constructor(private httpClient: HttpClient) {}
  public getAll(): Observable<Entreprise[]> {
    return this.httpClient.get<Entreprise[]> (this.url);
  }
  public getById(id): Observable<Entreprise> {
    return this.httpClient.get<Entreprise>(this.url + '/' + id);
  }
  public save(entreprise: Entreprise): Observable<any> {
    return this.httpClient.post(this.url, entreprise);
  }
  public update(entreprise: Entreprise): Observable<any> {
    return this.httpClient.put(this.url, entreprise);
  }

}

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Specialite} from '../model/specialite';


@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private url = environment.apiUrl + '/specialite';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Specialite[]> {
    return this.httpClient.get<Specialite[]> (this.url);
  }
  public getById(id): Observable<Specialite> {
    return this.httpClient.get<Specialite>(this.url + '/' + id);
  }
  public save(specialite: Specialite): Observable<any> {
    return this.httpClient.post(this.url, specialite);
  }
  public update(specialite: Specialite): Observable<any> {
    return this.httpClient.put(this.url, specialite);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

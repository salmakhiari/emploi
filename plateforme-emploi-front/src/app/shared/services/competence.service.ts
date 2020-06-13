import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Competence} from '../model/competence';


@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  private url = environment.apiUrl + '/competence';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Competence[]> {
    return this.httpClient.get<Competence[]> (this.url);
  }
  public getByCv(id): Observable<Competence[]> {
    return this.httpClient.get<Competence[]> (this.url + '/cv/' + id);
  }
  public getById(id): Observable<Competence> {
    return this.httpClient.get<Competence>(this.url + '/' + id);
  }
  public save(competence: Competence): Observable<any> {
    return this.httpClient.post(this.url, competence);
  }
  public update(competence: Competence): Observable<any> {
    return this.httpClient.put(this.url, competence);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

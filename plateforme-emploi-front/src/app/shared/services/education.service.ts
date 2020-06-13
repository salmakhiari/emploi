import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../model/education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url = environment.apiUrl + '/education';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]> (this.url);
  }
  public getByCv(id): Observable<Education[]> {
    return this.httpClient.get<Education[]> (this.url + '/cv/' + id);
  }
  public getById(id): Observable<Education> {
    return this.httpClient.get<Education>(this.url + '/' + id);
  }
  public save(education: Education): Observable<any> {
    return this.httpClient.post(this.url, education);
  }
  public update(education: Education): Observable<any> {
    return this.httpClient.put(this.url, education);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

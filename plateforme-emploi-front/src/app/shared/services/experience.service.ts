import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experience} from '../model/experience';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private url = environment.apiUrl + '/experience';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]> (this.url);
  }
  public getByCv(id): Observable<Experience[]> {
    return this.httpClient.get<Experience[]> (this.url + '/cv/' + id);
  }
  public getById(id): Observable<Experience> {
    return this.httpClient.get<Experience>(this.url + '/' + id);
  }
  public save(experience: Experience): Observable<any> {
    return this.httpClient.post(this.url, experience);
  }
  public update(experience: Experience): Observable<any> {
    return this.httpClient.put(this.url, experience);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

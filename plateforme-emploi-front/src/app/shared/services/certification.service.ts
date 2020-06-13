import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Certification} from '../model/certification';


@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private url = environment.apiUrl + '/certification';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Certification[]> {
    return this.httpClient.get<Certification[]> (this.url);
  }
  public getByCv(id): Observable<Certification[]> {
    return this.httpClient.get<Certification[]> (this.url + '/cv/' + id);
  }
  public getById(id): Observable<Certification> {
    return this.httpClient.get<Certification>(this.url + '/' + id);
  }
  public save(certification: Certification): Observable<any> {
    return this.httpClient.post(this.url, certification);
  }
  public update(certification: Certification): Observable<any> {
    return this.httpClient.put(this.url, certification);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offre} from '../model/offre';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private url = environment.apiUrl + '/offre';

  constructor(private httpClient: HttpClient) {
  }

  public getByEntrerpise(id): Observable<Offre[]> {
    return this.httpClient.get<Offre[]> (this.url + '/entreprise/' + id);
  }

  public getValidOffre(): Observable<Offre[]> {
    return this.httpClient.get<Offre[]> (this.url + '/valid');
  }
  public getById(id): Observable<Offre> {
    return this.httpClient.get<Offre>(this.url + '/' + id);
  }
  public save(offre: Offre): Observable<any> {
    return this.httpClient.post(this.url, offre);
  }
  public update(offre: Offre): Observable<any> {
    return this.httpClient.put(this.url, offre);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

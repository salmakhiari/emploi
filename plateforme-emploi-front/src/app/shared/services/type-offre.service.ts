import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeOffre} from '../model/type-offre';


@Injectable({
  providedIn: 'root'
})
export class TypeOffreService {
  private url = environment.apiUrl + '/typeOffre';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<TypeOffre[]> {
    return this.httpClient.get<TypeOffre[]> (this.url);
  }

  public getByParent(id): Observable<TypeOffre[]> {
    return this.httpClient.get<TypeOffre[]> (this.url + '/parent/' + id);
  }
  public getById(id): Observable<TypeOffre> {
    return this.httpClient.get<TypeOffre>(this.url + '/' + id);
  }
  public save(typeOffre: TypeOffre): Observable<any> {
    return this.httpClient.post(this.url, typeOffre);
  }
  public update(typeOffre: TypeOffre): Observable<any> {
    return this.httpClient.put(this.url, typeOffre);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidature} from '../model/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureureService {
  private url = environment.apiUrl + '/candidature';

  constructor(private httpClient: HttpClient) {
  }

  public getByCandidat(id): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(this.url + '/candidat/' + id);
  }

  public getByOffre(id): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(this.url + '/offre/' + id);
  }

  public save(candidat: Candidature): Observable<any> {
    return this.httpClient.post(this.url, candidat);
  }


  public postuled(idOffre, idCandidat): Observable<any> {
    return this.httpClient.get(this.url + '/' + idOffre + '/' + idCandidat);
  }
}

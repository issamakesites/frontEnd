import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../Demande';
@Injectable({
  providedIn: 'root'
})
export class demandeService {

  constructor(private http: HttpClient) { }

  getDemandes() {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande');
  }
  getDemandelAccepted() {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande/etat/1');
  }
  getDemandeDeclined() {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande/etat/2');
  }
  getDemandePending() {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande/etat/0');
  }
}
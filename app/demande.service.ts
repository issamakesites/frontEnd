import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demande } from './Demande';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  getEnseignantDemandes(id: number) {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande/enseignant/'+id);
  }
  
  getDemandes() {
    return this.http.get<Demande[]>('http://localhost:8080/api/demande');
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Materiel } from './materiel'
@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  constructor(private http: HttpClient) { }

  getMaterielAff() {
    return this.http.get<Materiel[]>('http://localhost:8080/api/materiels/date/not-null');
  }
  getMaterielDispo() {
    return this.http.get<Materiel[]>('http://localhost:8080/api/materiels/date/null');
  }
  getEnseignantMateriel(id: number) {
    return this.http.get<Materiel[]>('http://localhost:8080/api/materiels/enseignant/'+id);
  }
  getMaterielById(id: number) {
    return this.http.get<Materiel>('http://localhost:8080/api/materiels/'+id);
  }
}
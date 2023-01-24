import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourniture } from './fourniture';

@Injectable({
  providedIn: 'root'
})
export class FournitureService {

  constructor(private http: HttpClient) { }

  getFournitures() {
    return this.http.get<Fourniture[]>('http://localhost:8080/api/fournitures');
  }
}
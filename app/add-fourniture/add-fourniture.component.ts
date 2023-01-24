import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-fourniture',
  templateUrl: './add-fourniture.component.html',
  styleUrls: ['./add-fourniture.component.css']
})
export class AddFournitureComponent {
    formData = {
      type: '',
      nombre: 0
    };
  
    constructor(private http: HttpClient) {}
  
    onSubmit(){
      // envoyer les donnees
      this.http.post('http://localhost:8080/api/fournitures', this.formData).subscribe();
      // recharcher la page
      document.location=document.location
    }
  }

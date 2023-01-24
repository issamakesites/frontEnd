import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editfournitureform',
  templateUrl: './editfournitureform.component.html',
  styleUrls: ['./editfournitureform.component.css']
})
export class EditfournitureformComponent implements OnInit{
  @Input() item = 0;
  @Input() type = "";
  @Input() nombre=0;
  ancienType = this.type;
  @Input() etat = "";
  formData = {
    type: this.type,
    nombre: this.nombre
  };
  
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    console.log(this.type)
    console.log(this.nombre)
    console.log(this.item)
  }
  onSubmit(){
    // envoyer les donnees
    this.http.put('http://localhost:8080/api/fournitures/'+this.item, this.formData).subscribe();
      // recharcher la page
      document.location=document.location
  }
}

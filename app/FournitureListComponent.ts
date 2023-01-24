import { Component, OnInit } from '@angular/core';
import { Fourniture } from './fourniture';
import { HttpClient } from '@angular/common/http';
import { FournitureService } from './fourniture.service';
import { DeleteFournitureButtonComponent } from './delete-fourniture-button/delete-fourniture-button.component';
@Component({
  selector: 'app-fourniture-list',
  template: `
  <div class="component-white"> 
  <h2>Liste des fournitures</h2>
    <input type="text" class="bigger"  (keyup)="onChange()" id="type" placeholder="Rechercher une fourniture" [(ngModel)]="formData.type" name="type" required>
      <table class="listing-table">
     <tr class="thead">
        <td class="thead-td">Type</td>
        <td class="thead-td">Nombre</td>
        <td class="affectation-td thead-td">Actions</td>
      </tr>
      <tr *ngFor="let fourniture of fournitures">
        <td>{{ fourniture.type }}</td>
        <td>{{ fourniture.nombre }}</td>
        <td>

        <app-delete-fourniture-button [item]="fourniture.id" [type]="fourniture.type"></app-delete-fourniture-button>
        <app-edit-fourniture-trigger [item]="fourniture.id" [nombre]="fourniture.nombre" [type]="fourniture.type" [etat]="'hidden'"></app-edit-fourniture-trigger>
      </td>
        </tr>
    </table>
  </div>
  `,
  styleUrls: ['materiel-list-component/materiel-list-component.component.css']
})
export class FournitureListComponent implements OnInit {
  fournitures: Fourniture[] = [];
  formData = {
    type: ""
  };
  constructor(private fournitureService: FournitureService,private http: HttpClient) {
  }

  ngOnInit() {
   this.fournitureService.getFournitures().subscribe(fournitures => {
        this.fournitures = fournitures;
      });
  }
  onChange(){
    if(this.formData.type!=""){
      this.http.get<Fourniture[]>('http://localhost:8080/api/fournitures/search?type='+this.formData.type).subscribe(fournitures => {
        this.fournitures = fournitures;
        console.log("h"+this.fournitures)
      });
    }
    else {
      this.fournitureService.getFournitures().subscribe(fournitures => {
        this.fournitures = fournitures;
      });
    }
   
  }
}
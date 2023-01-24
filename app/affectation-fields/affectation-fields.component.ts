import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';
import { HttpClient } from '@angular/common/http';
import { Enseignant } from '../enseignant';
@Component({
  selector: 'app-affectation-fields',
  templateUrl: './affectation-fields.component.html',
  styleUrls: ['./affectation-fields.component.css']
})
export class AffectationFieldsComponent implements OnInit{
  constructor(private http: HttpClient){}
  @Input() materiel = 0;
  enseignants: Enseignant[] = []
  choix = 0
  enseignant : Enseignant[] = []
  ngOnInit() {
    // on cherche tout les enseignants pour remplir le champs des choix pour affecter
    this.http.get<Enseignant[]>("http://localhost:8080/api/enseignant").subscribe(
      enseignants => {
        this.enseignants = enseignants,
        this.choix = enseignants[0].id,
        this.enseignant[0]=enseignants[0]
      })
  }
  affecter(){
   // console.log(this.choix)
   // console.log(this.materiel)
    this.enseignant = this.enseignants.filter(
      item => {
        return item.id==this.choix
      });
    console.log(this.enseignant[0])
    this.http.put('http://localhost:8080/api/materiels/affecter/'+this.materiel, this.enseignant[0]).subscribe(
      resp =>
      {
       if(JSON.stringify(resp).includes("id"))
        console.log("hihihihi")
      else 
        console.log("nnnn")
      });
      return document.location = document.location;
  }
  supprimer(){
    if (confirm('Voulez vous vraiment supprimer ce materiel ?')) {
       this.http.delete('http://localhost:8080/api/materiels/'+this.materiel).subscribe();
       return document.location = document.location;
     } 
    return ;
   }
}

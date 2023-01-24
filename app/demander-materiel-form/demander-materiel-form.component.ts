import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../demande.service';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';
import { Enseignant } from '../enseignant';
import { HttpClient } from '@angular/common/http';
import { Demande } from '../Demande';
@Component({
  selector: 'app-demander-materiel-form',
  templateUrl: './demander-materiel-form.component.html',
  styleUrls: ['./demander-materiel-form.component.css']
})
export class DemanderMaterielFormComponent implements OnInit {
  choix = {
    materiel: 0
  }
  materiel: Materiel[]=[]
  formData = {
    materiel: {} as Materiel,
    enseignant: {} as Enseignant,
    etat: 0,
    dateCreation: "",
    materiel_id:0
  }
  constructor(private MaterielService: MaterielService,
     private DemandeService: DemandeService, private http: HttpClient){
  }
  ngOnInit(){
    // hnaya ndiro id dyal current user 
    this.http.get<Enseignant>("http://localhost:8080/api/enseignant/1").subscribe(enseignant => {
      this.formData.enseignant = enseignant
    });

    this.formData.materiel_id = this.choix.materiel;

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().substring(0, 10);
    this.formData.dateCreation = currentDateString;

    this.MaterielService.getMaterielDispo().subscribe(materiel => {
      this.materiel = materiel,
      this.formData.materiel = materiel[0],
      this.choix.materiel = materiel[0].id;
      this.formData.materiel_id = materiel[0].id;
      //console.log(materiel)
    })
    console.log(this.formData)

   // this.choix.materiel = this.materiel[0].id;
  }
  onSubmit(){
      // envoyer les donnees
      this.MaterielService.getMaterielById(this.choix.materiel).subscribe(materiel => {
        this.formData.materiel = materiel;
      })
      this.formData.materiel_id = this.choix.materiel;
      console.log(this.formData)
    this.http.post('http://localhost:8080/api/demande', this.formData).subscribe(resp =>
      {
        console.log("hihi"+resp)
      });
      return document.location = document.location;
  }
}

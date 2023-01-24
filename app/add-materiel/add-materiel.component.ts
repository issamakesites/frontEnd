import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent {
    formData = {
      type: "",
      numInventaire: "",
      dateAcquisition: "",
      dateAffectation: null,
      enseignant: null
    };
    @ViewChild('dateAcquisition')
  dateAcquisition!: ElementRef;
    constructor(private http: HttpClient) {}
  
    onChange(){
        this.formData.dateAcquisition = this.dateAcquisition.nativeElement.value;
        console.log("date "+this.formData.dateAcquisition);
    }
    onSubmit(){
      // envoyer les donnees
      this.http.post('http://localhost:8080/api/materiels', this.formData).subscribe();
      // recharcher la page
      document.location=document.location
    }
  }

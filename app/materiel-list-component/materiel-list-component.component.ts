import { Component,OnInit } from '@angular/core';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';
import { HttpClient } from '@angular/common/http';
import { Enseignant } from '../enseignant';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-materiel-list-component',
  template: `
  <div class="component-white">
  <h2>Liste du materiel affecté</h2>
  <ng-template #aff>
  <p>exporter le tableau: 
  <button class="exporter" (click)="openPDF()"><img src="/assets/pdf.png" /></button>
  <button class="exporter" (click)="exportexcel()"><img src="/assets/csv.png" /></button>
  </p>
  <input type="text" class="bigger" (keyup)="searchAff()" id="type" placeholder="Rechercher un materiel" [(ngModel)]="formData.searchAff" name="type" required>
  <table class="listing-table" id="htmlData">
    <tr class="thead">
      <td class="thead-td">Numero dinventaire</td>
      <td class="thead-td">Type</td>
      <td class="thead-td">Date d'acquisition</td>
      <td class="thead-td">Date d'affectation</td>
      <td class="thead-td">enseignant</td>
    </tr>
    <tr *ngFor="let materiel of searchedMaterielsAff">
      <td>{{ materiel.numInventaire}}</td>
      <td>{{ materiel.type }}</td>
      <td>{{ materiel.dateAcquisition }}</td>
      <td>{{ materiel.dateAffectation }}</td>
      <td>{{ materiel.enseignant.nom.toUpperCase() }} {{ materiel.enseignant.prenom.charAt(0).toUpperCase() + materiel.enseignant.prenom.slice(1) }}</td>
       </tr>
  </table>
  </ng-template>
  <ng-template #nonaff>
  <input type="text" class="bigger" (keyup)="searchAff()" id="type" placeholder="Rechercher un materiel" [(ngModel)]="formData.searchAff" name="type" required>
  <p>Aucun materiel trouvé.</p>
</ng-template>
<ng-container *ngIf="searchedMaterielsAff.length!=0; then aff; else nonaff"></ng-container>
  </div>
  <div class="component-white">
  <h2>Liste du materiel disponible</h2>
  <ng-template #dispo>
  <input type="text" (keyup)="searchDispo()" id="type" placeholder="Rechercher un materiel" [(ngModel)]="formData.searchDispo" name="type" required>
  <table class="listing-table">
    <tr class="thead">
      <td class="thead-td">Numero dinventaire</td>
      <td class="thead-td">Type</td>
      <td class="thead-td">Date d'acquisition</td>
      <td class="affectation-thead thead-td">Actions</td>
    </tr>
    <tr *ngFor="let materiel of searchedMaterielsDispo">
      <td>{{ materiel.numInventaire}}</td>
      <td>{{ materiel.type }}</td>
      <td>{{ materiel.dateAcquisition }}</td>
      <td class="affectation-td">
      <app-affectation-fields [materiel]=materiel.id></app-affectation-fields>
      </td>
       </tr>
  </table>
</ng-template>
  <ng-template #nondispo>
  <input type="text" (keyup)="searchDispo()" id="type" placeholder="Rechercher un materiel" [(ngModel)]="formData.searchDispo" name="type" required>
  <p>Aucun materiel trouvé.</p>
</ng-template>
<ng-container *ngIf="searchedMaterielsDispo.length!=0; then dispo; else nondispo"></ng-container>
  </div>`,
  styleUrls: ['./materiel-list-component.component.css']
})

export class MaterielListComponentComponent implements OnInit {
  materielsAff: Materiel[] = [];
  searchedMaterielsAff: Materiel[] = [];
  materielsDispo: Materiel[] = [];
  searchedMaterielsDispo: Materiel[] = [];
  formData = {
    searchDispo: "",
    searchAff: ""
  };
  enseignants: Enseignant[] = []
  affectation = {
    materielId: 0,
    enseignant: {} as Enseignant
  }
  choix = 0
  constructor(private MaterielService: MaterielService,private http: HttpClient) {
  }

  ngOnInit() {
   this.MaterielService.getMaterielAff().subscribe(materiels => {
        this.materielsAff = materiels;
        this.searchedMaterielsAff = materiels;
        console.log(this.searchedMaterielsAff)
      });
    this.MaterielService.getMaterielDispo().subscribe(materiels => {
        this.materielsDispo = materiels;
        this.searchedMaterielsDispo = materiels;
        console.log(this.searchedMaterielsDispo)
      });
  }
  searchDispo(){

    if(!this.formData.searchDispo) {
      this.searchedMaterielsDispo = this.materielsDispo;
  } else {
      this.searchedMaterielsDispo = this.materielsDispo.filter(
        item => {
          return item.type.toLowerCase().includes(this.formData.searchDispo.toLowerCase()) 
            || item.numInventaire.toLowerCase().includes(this.formData.searchDispo.toLowerCase())
            || item.dateAcquisition.toLowerCase().includes(this.formData.searchDispo.toLowerCase())
        });
  }
  console.log("searched "+this.searchedMaterielsDispo)

  }
  
  searchAff(){
    
    if(!this.formData.searchAff) {
      this.searchedMaterielsAff = this.materielsAff;
  } else {
      this.searchedMaterielsAff = this.materielsAff.filter(
        item =>  {
          return item.type.toLowerCase().includes(this.formData.searchAff.toLowerCase()) 
            || item.enseignant.nom.toLowerCase().includes(this.formData.searchAff.toLowerCase())
            || item.enseignant.prenom.toLowerCase().includes(this.formData.searchAff.toLowerCase())
            || item.numInventaire.toLowerCase().includes(this.formData.searchAff.toLowerCase())
            || item.dateAcquisition.toLowerCase().includes(this.formData.searchAff.toLowerCase())
            || item.dateAffectation.toLowerCase().includes(this.formData.searchAff.toLowerCase())
        });
  }
  console.log("searched "+this.searchedMaterielsAff)

  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  transformArray(arr: Materiel[]) {
    return arr.map(item => {
      return {
        "numInventaire": item.numInventaire,
        "type": item.type,
        "dateAcquisition": item.dateAcquisition,
        "dateAffectation": item.dateAffectation,
        "nom": item.enseignant.nom,
        "prenom": item.enseignant.prenom
      };
    });
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('htmlData');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, "Materiel.csv");
 
  }


}
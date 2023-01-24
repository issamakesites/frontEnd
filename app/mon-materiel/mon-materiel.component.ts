import { Component, OnInit } from '@angular/core';
import { Materiel } from '../materiel';
import { HttpClient } from '@angular/common/http';
import { MaterielService } from '../materiel.service';
@Component({
  selector: 'app-mon-materiel',
  templateUrl: './mon-materiel.component.html',
  styleUrls: ['./mon-materiel.component.css']
})
export class MonMaterielComponent implements OnInit{
  materiels: Materiel[] = []
  constructor(private MaterielService: MaterielService, private http: HttpClient){

  }
  ngOnInit() {
    // hnaya ndiro id dyal current user
     this.MaterielService.getEnseignantMateriel(1).subscribe(materiels => {
         this.materiels = materiels;
        // console.log(this.materiels)
       });
   }
}

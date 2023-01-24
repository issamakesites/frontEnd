import { Component, OnInit } from '@angular/core';
import { Demande } from '../Demande';
import { HttpClient } from '@angular/common/http';
import { DemandeService } from '../demande.service';
@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit{
    demandes: Demande[] = []
    constructor(private DemandeService: DemandeService, private http: HttpClient){
  
    }
    ngOnInit() {
      // hnaya ndiro id dyal current user
       this.DemandeService.getEnseignantDemandes(1).subscribe(demandes => {
           this.demandes = demandes.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
           console.log(this.demandes)
         });
        
        
     }
  }
import { Component, OnInit } from '@angular/core';
import { Demande } from '../Demande';
import { HttpClient } from '@angular/common/http';
import { DemandeService } from '../demande.service';
import { Materiel } from '../materiel';
import { Enseignant } from '../enseignant';
@Component({
  selector: 'app-demandes-list',
  templateUrl: './demandes-list.component.html',
  styleUrls: ['./demandes-list.component.css']
})
export class DemandesListComponent {
  demandes: Demande[] = []
  demandesaAttente: Demande[] = []
  demandesaAccepte: Demande[] = []
  demandesaRejete: Demande[] = []

  constructor(private DemandeService: DemandeService, private http: HttpClient){
  }
  ngOnInit() {
    this.DemandeService.getDemandes().subscribe(demandes => {
         this.demandes = demandes.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
         console.log(this.demandes)
         this.demandesaAttente = demandes.filter(
          item => {
            return item.etat==0
          });
         this.demandesaAccepte = demandes.filter(
          item => {
            return item.etat==1
          });
         this.demandesaRejete = demandes.filter(
          item => {
            return item.etat==2
          });
      });
   }
   affecter(id: number){
     this.http.put('http://localhost:8080/api/demande/accepter/'+id,"").subscribe(
       resp =>
       {
        if(JSON.stringify(resp).includes("200"))
         console.log("hihihihi")
       else 
         console.log("nnnn")
       });
       return document.location = document.location;
   }
   rejeter(id: number){
       if (confirm('Voulez vous vraiment rejeter cette demande ?')) {
        this.http.put('http://localhost:8080/api/demande/rejeter/'+id,"").subscribe();
        return document.location = document.location;
      } 
     return ;
   }
}

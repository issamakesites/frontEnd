import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete-fourniture-button',
  templateUrl: './delete-fourniture-button.component.html',
  styleUrls: ['./delete-fourniture-button.component.css']
})
export class DeleteFournitureButtonComponent {
  @Input() item = 0;
  @Input() type = "";
  @Input() template = "";
  constructor (private http: HttpClient){}
  supprimerFourniture(){
   if (confirm('Voulez vous vraiment supprimer: '+this.type+' ?')) {
      // User clicked OK, perform delete operation
      console.log(this.item)
      let query = 'http://localhost:8080/api/fournitures/'+this.item;
      console.log(query)
      this.http.delete('http://localhost:8080/api/fournitures/'+this.item).subscribe();
      return document.location = document.location;
    } 
   return ;
  }
}

import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-fourniture-trigger',
  templateUrl: './edit-fourniture-trigger.component.html',
  styleUrls: ['./edit-fourniture-trigger.component.css']
})
export class EditFournitureTriggerComponent {
  @Input() item = 0;
  @Input() type = "";
  @Input() nombre = 0;
  @Input() etat = "";
  constructor (private http: HttpClient){}
  showForm(){
    this.etat="shown";
  }
  hideForm(){
    this.etat="hidden";
  }
  }


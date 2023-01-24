import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournitureListComponent } from './FournitureListComponent';
import { AddFournitureComponent } from './add-fourniture/add-fourniture.component';
import { DeleteFournitureButtonComponent } from './delete-fourniture-button/delete-fourniture-button.component';
import { EditFournitureTriggerComponent } from './edit-fourniture-trigger/edit-fourniture-trigger.component';
import { EditfournitureformComponent } from './editfournitureform/editfournitureform.component';
import { MaterielListComponentComponent } from './materiel-list-component/materiel-list-component.component';
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { FournitureChartComponent } from './fourniture-chart/fourniture-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterielChartComponent } from './materiel-chart/materiel-chart.component';
import { MonMaterielComponent } from './mon-materiel/mon-materiel.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { DemanderMaterielFormComponent } from './demander-materiel-form/demander-materiel-form.component';
import { EnseignantDashboardComponent } from './enseignant-dashboard/enseignant-dashboard.component';
import { EnseignantDemandesChartComponent } from './enseignant-demandes-chart/enseignant-demandes-chart.component';
import { AdminMaterielComponent } from './admin-materiel/admin-materiel.component';
import { AdminFournitureComponent } from './admin-fourniture/admin-fourniture.component';
import { AdminDemandesComponent } from './admin-demandes/admin-demandes.component';
import { AffectationFieldsComponent } from './affectation-fields/affectation-fields.component';
import { DemandesListComponent } from './demandes-list/demandes-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FournitureListComponent,
    AddFournitureComponent,
    DeleteFournitureButtonComponent,
    EditFournitureTriggerComponent,
    EditfournitureformComponent,
    MaterielListComponentComponent,
    AddMaterielComponent,
    FournitureChartComponent,
    MaterielChartComponent,
    MonMaterielComponent,
    MesDemandesComponent,
    DemanderMaterielFormComponent,
    EnseignantDashboardComponent,
    EnseignantDemandesChartComponent,
    AdminMaterielComponent,
    AdminFournitureComponent,
    AdminDemandesComponent,
    AffectationFieldsComponent,
    DemandesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

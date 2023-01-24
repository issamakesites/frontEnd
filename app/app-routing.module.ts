import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminDemandesComponent } from './admin-demandes/admin-demandes.component';
import { AdminFournitureComponent } from './admin-fourniture/admin-fourniture.component';
import { AdminMaterielComponent } from './admin-materiel/admin-materiel.component';
import { AppComponent } from './app.component';
import { DemanderMaterielFormComponent } from './demander-materiel-form/demander-materiel-form.component';
import { EnseignantDashboardComponent } from './enseignant-dashboard/enseignant-dashboard.component';
import { FournitureChartComponent } from './fourniture-chart/fourniture-chart.component';
import { MaterielChartComponent } from './materiel-chart/materiel-chart.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { MonMaterielComponent } from './mon-materiel/mon-materiel.component';
const routes: Routes = [
  { path: 'enseignant', component: EnseignantDashboardComponent },
  { path: 'admin/materiel', component: AdminMaterielComponent },
  { path: 'admin/demandes', component: AdminDemandesComponent },
  { path: 'admin/fourniture', component: AdminFournitureComponent },
  { path: '**', component: AdminMaterielComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
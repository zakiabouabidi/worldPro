import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './componements/formation/formation.component';
import { DetailFormationComponent } from './componements/detail-formation/detail-formation.component';
import { AddFormationComponent } from './componements/add-formation/add-formation.component';
import { EditFormationComponent } from './componements/edit-formation/edit-formation.component';
import { AccuielComponent } from './componements/accuiel/accuiel.component';
import { DashboardComponent } from './componements/dashboard/dashboard.component';
import { FormationAdminComponent } from './componements/formation-admin/formation-admin.component';

const routes: Routes = [
  {path:'',component:AccuielComponent},
  {path:'formation', component:FormationComponent},
  {path:'formation/:id', component: DetailFormationComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboard/add', component:AddFormationComponent},
  {path:'dashboard/formation-admin', component:FormationAdminComponent},
  {path:'dashboard/edit/:id', component: EditFormationComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

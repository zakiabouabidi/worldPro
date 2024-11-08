import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddFormationComponent } from './componements/add-formation/add-formation.component';
import { EditFormationComponent } from './componements/edit-formation/edit-formation.component';
import { DelateFormationComponent } from './componements/delate-formation/delate-formation.component';
import { DetailFormationComponent } from './componements/detail-formation/detail-formation.component';
import { FormationComponent } from './componements/formation/formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BaseURL } from './models/baseUrl';
import { AccuielComponent } from './componements/accuiel/accuiel.component';
import { DashboardComponent } from './componements/dashboard/dashboard.component';
import { MainHeaderComponent } from './componements/main-header/main-header.component';
import { AdminHeaderComponent } from './componements/admin-header/admin-header.component';
import { FormationAdminComponent } from './componements/formation-admin/formation-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    AddFormationComponent,
    EditFormationComponent,
    DelateFormationComponent,
    DetailFormationComponent,
    FormationComponent,
    AccuielComponent,
    DashboardComponent,
    MainHeaderComponent,
    AdminHeaderComponent,
    FormationAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'baseUrl', useValue: BaseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



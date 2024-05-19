import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlanningComponent } from './components/planning/planning.component';
import { PointagesComponent } from './components/pointages/pointages.component';
import { PointeuseComponent } from './components/pointeuse/pointeuse.component';
import { ConfigPointeuseComponent } from './components/config-pointeuse/config-pointeuse.component';
import { TypeSeanceComponent } from './components/type-seance/type-seance.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeComponent } from './components/employe/employe.component';
import { FormuleMensuelComponent } from './components/formule-mensuel/formule-mensuel.component';
import { ReposComponent } from './components/repos/repos.component';
import { TableauDeBordComponent } from './components/tableau-de-bord/tableau-de-bord.component';
import { PlanningFormComponent } from './components/planning-form/planning-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeFormComponent } from './components/employe-form/employe-form.component';
import { PointeuseFormComponent } from './components/pointeuse-form/pointeuse-form.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanningComponent,
    PointagesComponent,
    PointeuseComponent,
    ConfigPointeuseComponent,
    TypeSeanceComponent,
    AdminComponent,
    EmployeComponent,
    FormuleMensuelComponent,
    ReposComponent,
    TableauDeBordComponent,
    PlanningFormComponent,
    EmployeFormComponent,
    PointeuseFormComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

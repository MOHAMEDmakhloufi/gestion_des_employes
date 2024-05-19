import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent, canActivate:[AdminGuard] },
  { path: 'pointages', component: PointagesComponent, canActivate:[AdminGuard] },
  { path: 'pointeuse', component: PointeuseComponent, canActivate:[AdminGuard] },
  { path: 'config-pointeuse', component: ConfigPointeuseComponent, canActivate:[AdminGuard] },
  { path: 'type-seance', component: TypeSeanceComponent, canActivate:[AdminGuard] },
  { path: 'admin', component: AdminComponent, canActivate:[AdminGuard] },
  { path: 'employe', component: EmployeComponent, canActivate:[AdminGuard] },
  { path: 'formule-mensuel', component: FormuleMensuelComponent, canActivate:[AdminGuard] },
  { path: 'repos', component: ReposComponent, canActivate:[AdminGuard] },
  { path: 'tableau-de-bord', component: TableauDeBordComponent, canActivate:[AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

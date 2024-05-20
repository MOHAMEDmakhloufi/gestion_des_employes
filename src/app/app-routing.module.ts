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
import { PointagesHomeComponent } from './components/pointages-home/pointages-home.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PointageJournalierComponent } from './components/pointage-journalier/pointage-journalier.component';
import { MachineComponent } from './components/machine/machine.component';
import { HierarchieComponent } from './components/hierarchie/hierarchie.component';
import { FilialeComponent } from './components/filiale/filiale.component';
import { SiteComponent } from './components/site/site.component';
import { ServiceComponent } from './components/service/service.component';
import { ParametrageLogicielComponent } from './components/parametrage-logiciel/parametrage-logiciel.component';
import { ParametragePointageComponent } from './components/parametrage-pointage/parametrage-pointage.component';
import { RapportetstatistiqueComponent } from './components/rapportetstatistique/rapportetstatistique.component';
import { PointageManquantComponent } from './components/pointage-manquant/pointage-manquant.component';
import { HeuresSuppComponent } from './components/heures-supp/heures-supp.component';
import { AbsencesComponent } from './components/absences/absences.component';
import { CongesComponent } from './components/conges/conges.component';
import { RetardComponent } from './components/retard/retard.component';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent, canActivate:[AdminGuard] },
  { path: 'pointages', component: PointagesHomeComponent, canActivate:[AdminGuard] },
  { path: 'pointage-journalier', component: PointageJournalierComponent, canActivate:[AdminGuard] },
  { path: 'pointage-mensuel', component: PointagesComponent, canActivate:[AdminGuard] },
  { path: 'machine', component: MachineComponent, canActivate:[AdminGuard] },
  { path: 'pointeuse', component: PointeuseComponent, canActivate:[AdminGuard] },
  { path: 'config-pointeuse', component: ConfigPointeuseComponent, canActivate:[AdminGuard] },
  { path: 'hierarchie', component: HierarchieComponent, canActivate:[AdminGuard] },
  { path: 'filiale', component: FilialeComponent, canActivate:[AdminGuard] },
  { path: 'site', component: SiteComponent, canActivate:[AdminGuard] },
  { path: 'service', component: ServiceComponent, canActivate:[AdminGuard] },
  { path: 'parametrage-logiciel', component: ParametrageLogicielComponent, canActivate:[AdminGuard] },
  { path: 'type-seance', component: TypeSeanceComponent, canActivate:[AdminGuard] },
  { path: 'parametrage-pointage', component: ParametragePointageComponent, canActivate:[AdminGuard] },
  { path: 'admin', component: AdminComponent, canActivate:[AdminGuard] },
  { path: 'employe', component: EmployeComponent, canActivate:[AdminGuard] },
  { path: 'formule-mensuel', component: FormuleMensuelComponent, canActivate:[AdminGuard] },
  { path: 'repos', component: ReposComponent, canActivate:[AdminGuard] },
  { path: 'rapport-et-statistique', component: RapportetstatistiqueComponent, canActivate:[AdminGuard] },
  { path: 'tableau-de-bord', component: TableauDeBordComponent, canActivate:[AdminGuard] },
  { path: 'pointage-manquant', component: PointageManquantComponent, canActivate:[AdminGuard] },
  { path: 'heures-supp', component: HeuresSuppComponent, canActivate:[AdminGuard] },
  { path: 'retard', component: RetardComponent, canActivate:[AdminGuard] },
  { path: 'absences', component: AbsencesComponent, canActivate:[AdminGuard] },
  { path: 'conges', component: CongesComponent, canActivate:[AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: AcceuilComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

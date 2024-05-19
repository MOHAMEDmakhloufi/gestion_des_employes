import { Employe } from "./employe";

export interface TableauDeBordItem {
    code?: string;
    employe?: Employe;
    nbre_absences?: number;
    conges?: string;
    nbre_de_retards?: number;
    nbre_heures_supp?: number;
  }
  
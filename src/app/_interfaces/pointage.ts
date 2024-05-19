import { Employe } from "./employe";

// pointage.interface.ts
export interface Pointage {
    id?: number;
    employe?: Employe; // Assuming Employe interface is already defined
    date?: string;
    entre?: string;
    sortie?: string;
    pause_de?: string;
    pause_a?: string;
    nbre_heures?: number;
  }
  
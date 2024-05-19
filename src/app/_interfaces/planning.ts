import { Employe } from "./employe";

export interface Planning {
    id?: number;
    employe?: Employe;
    jour?: string;
    service?: string;
    site?: string;
    activite?: string;
}
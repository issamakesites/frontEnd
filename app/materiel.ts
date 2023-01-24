import { Enseignant } from "./enseignant";
export interface Materiel {
    id: number;
    type: string;
    numInventaire: string;
    dateAcquisition: string;
    dateAffectation: string;
    enseignant: Enseignant;

}
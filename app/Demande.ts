import { Enseignant } from "./enseignant";
import { Materiel } from "./materiel";
export interface Demande {
    id: number;
    dateCreation: string;
    etat: number;
    enseignant: Enseignant;
    materiel: Materiel;

}
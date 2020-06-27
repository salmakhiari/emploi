import {Entreprise} from './entreprise';
import {TypeOffre} from './type-offre';
import {Specialite} from './specialite';

export class Offre {
  id: number;
  titre: string;
  description: string;
  dateCreation: Date;
  dateExpiration: Date;
  experience: string;
  entreprise: Entreprise;
  typeOffre: TypeOffre;
  specialite: Specialite;
}

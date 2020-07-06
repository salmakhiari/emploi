import {Component, OnInit} from '@angular/core';
import {Specialite} from '../../shared/model/specialite';
import {SpecialiteService} from '../../shared/services/specialite.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {OffreService} from '../../shared/services/offre.service';
import {TypeOffreService} from '../../shared/services/type-offre.service';
import {Offre} from '../../shared/model/offre';
import * as moment from 'moment';
import {TypeOffre} from '../../shared/model/type-offre';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  specialities: Specialite[];
  parents: TypeOffre[];
  children: TypeOffre[];
  typeOffre: TypeOffre;
  specialite = new Specialite();
  offre = new Offre();
  id;
  minDate = new Date();
  experiences = ['Aucune experience', 'Moins que 1 an', 'De 1 à 3 ans', 'De 3 à 5 ans', 'Plus que 5 ans'];

  constructor(private specialiteService: SpecialiteService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private typeOffreService: TypeOffreService,
              private offreService: OffreService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.offreService.getById(this.id).subscribe(res => {
        this.offre = res;
    //    this.minDate.setDate(this.offre.dateCreation.getDate() + 1);
        this.typeOffre = this.offre.typeOffre.parent;
        this.getChildren();
      }, ex => {
        console.log(ex);
      });
    } else {
    this.offre.dateCreation = moment(new Date()).format('YYYY-MM-DD');
      this.minDate.setDate(this.minDate.getDate() + 1);
    }


    this.getAllSpecialte();
    this.getAllTypeOffre();
  }


  getAllSpecialte() {
    this.specialiteService.getAll().subscribe(data => {
      this.specialities = data;
    }, ex => {
      console.log(ex);
    });
  }

  getAllTypeOffre() {
    this.typeOffreService.getAll().subscribe(data => {
      this.parents = data;
    }, ex => {
      console.log(ex);
    });
  }

  getChildren() {
    this.typeOffreService.getByParent(this.typeOffre.id).subscribe(data => {
      this.children = data;
    }, ex => {
      console.log(ex);
    });
  }

  ajouter() {
    const entreprise = JSON.parse(localStorage.getItem('currentUser'));
    this.offre.entreprise = entreprise;
    this.offreService.save(this.offre).subscribe(res => {

      if (res.success) {
        this.router.navigate(['/offre/entreprise']);
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  modifier() {
    this.offreService.update(this.offre).subscribe(res => {

      if (res.success) {
        this.router.navigate(['/offre/entreprise']);
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  valider() {
    if (this.id) {
      this.modifier();
    } else {
      this.ajouter();
    }
  }
  compareSpec(c1: Specialite, c2: Specialite): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareTypeOffre(c1: TypeOffre, c2: TypeOffre): boolean {
    console.log('...');
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}

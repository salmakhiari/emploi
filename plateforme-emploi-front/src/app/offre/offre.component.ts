import {Component, OnInit} from '@angular/core';
import {OffreService} from '../shared/services/offre.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Offre} from '../shared/model/offre';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class OffreComponent implements OnInit {
  offres: Offre[];

  constructor(private offreService: OffreService,
              private messageService: MessageService,
              private router: Router,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getOffre();
  }

  getOffre() {
    const entreprise = JSON.parse(localStorage.getItem('currentUser'));
    this.offreService.getByEntrerpise(entreprise.id).subscribe(data => {
      this.offres = data;
    }, ex => {
      console.log(ex);
    });
  }


  clickEdit(offre) {
    this.router.navigate(['/offre/entreprise/edit', offre.id]);
  }


  supprimer(id) {


    this.confirmationService.confirm({
      message: 'Vous etes sur de supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.offreService.delete(id).subscribe(res => {

          if (res.success) {
            this.getOffre();
            this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
          } else {
            this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
          }
        }, ex => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
          console.log(ex);
        });
      },

    });


  }
}

import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../shared/model/entreprise';
import {EntrepriseService} from '../../shared/services/entreprise.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UtilisateurService} from '../../shared/services/utilisateur.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  entreprises: Entreprise[];

  constructor(private entrepriseService: EntrepriseService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.entrepriseService.getAll().subscribe(data => {
      this.entreprises = data;
    }, ex => {
      console.log(ex);
    });
  }

  changeEtat(entreprise) {
    this.confirmationService.confirm({
      message: 'Vous etes sur de supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.utilisateurService.changeState(entreprise.id).subscribe(res => {

          if (res.success) {
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

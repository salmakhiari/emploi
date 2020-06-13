import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../shared/model/candidat';
import {CandidatService} from '../../shared/services/candidat.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UtilisateurService} from '../../shared/services/utilisateur.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidats: Candidat[];

  constructor(private candidatService: CandidatService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.candidatService.getAll().subscribe(data => {
      this.candidats = data;
    }, ex => {
      console.log(ex);
    });
  }

  changeEtat(candidat) {
    this.confirmationService.confirm({
      message: 'Vous etes sur de supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.utilisateurService.changeState(candidat.id).subscribe(res => {

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

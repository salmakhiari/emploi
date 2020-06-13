import {Component, OnInit} from '@angular/core';
import {Specialite} from '../../shared/model/specialite';
import {SpecialiteService} from '../../shared/services/specialite.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  specialities: Specialite[];
  specialite = new Specialite();
  display = false;
  visible = false;
  constructor(private specialiteService: SpecialiteService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.specialiteService.getAll().subscribe(data => {
      this.specialities = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.specialite = new Specialite();
    this.display = true;
    this.visible = false;
  }
  clickEdit(spec) {
    this.display = true;
    this.visible = true;
    Object.assign(this.specialite, spec);
  }
  ajouter() {
    this.specialiteService.save(this.specialite).subscribe(res => {

      if (res.success) {
        this.getAll();
        this.display = false;
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  supprimer(id) {


    this.confirmationService.confirm({
      message: 'Vous etes sur de supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.specialiteService.delete(id).subscribe(res => {

          if (res.success) {
            this.getAll();
            this.display = false;
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


  modifier() {
    this.specialiteService.update(this.specialite).subscribe(res => {

      if (res.success) {
        this.getAll();
        this.display = false;
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }
}

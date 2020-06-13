import { Component, OnInit } from '@angular/core';
import {TypeOffre} from '../../shared/model/type-offre';
import {TypeOffreService} from '../../shared/services/type-offre.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-type-offre',
  templateUrl: './type-offre.component.html',
  styleUrls: ['./type-offre.component.scss']
})
export class TypeOffreComponent implements OnInit {
  typeOffres: TypeOffre[];
  typeOffre = new TypeOffre();
  display = false;
  visible = false;
  constructor(private typeOffreService: TypeOffreService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.typeOffreService.getAll().subscribe(data => {
      this.typeOffres = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.typeOffre = new TypeOffre();
    this.display = true;
    this.visible = false;
  }
  clickEdit(spec) {
    this.display = true;
    this.visible = true;
    Object.assign(this.typeOffre, spec);
  }
  ajouter() {
    this.typeOffreService.save(this.typeOffre).subscribe(res => {

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
        this.typeOffreService.delete(id).subscribe(res => {

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
    this.typeOffreService.update(this.typeOffre).subscribe(res => {

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

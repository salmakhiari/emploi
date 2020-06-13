import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {Langue} from '../../shared/model/langue';
import {LangueService} from '../../shared/services/langue.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {
  @Input()  cv: Cv;
  langues: Langue[];
  langue = new Langue();
  display = false;
  visible = false;
  constructor(private langueService: LangueService,
              private messageService: MessageService,
              private cvService: CvService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getCv() {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.cv.candidat = candidat;
    this.cvService.getById(candidat.id).subscribe(res => {
      if (res) {
        this.cv = res;
        this.getAll();
      }
    }, ex => {
      console.log(ex);
    });
  }
  getAll() {
    this.langueService.getByCv(this.cv.id).subscribe(data => {
      this.langues = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.langue = new Langue();
    this.display = true;
    this.visible = false;
  }
  clickEdit(educ) {
    this.display = true;
    this.visible = true;
    Object.assign(this.langue, educ);
  }
  ajouter() {
    this.langue.cv = this.cv;
    this.langueService.save(this.langue).subscribe(res => {

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
        this.langueService.delete(id).subscribe(res => {

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
    this.langueService.update(this.langue).subscribe(res => {

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

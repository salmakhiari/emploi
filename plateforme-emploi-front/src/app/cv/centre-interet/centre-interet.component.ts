import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {CentreInteret} from '../../shared/model/centre-interet';
import {CentreInteretService} from '../../shared/services/centre-interet.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-centre-interet',
  templateUrl: './centre-interet.component.html',
  styleUrls: ['./centre-interet.component.css']
})
export class CentreInteretComponent implements OnInit {
  @Input()  cv: Cv;
  centreInterets: CentreInteret[];
  centreInteret = new CentreInteret();
  display = false;
  visible = false;
  constructor(private centreInteretService: CentreInteretService,
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
    this.centreInteretService.getByCv(this.cv.id).subscribe(data => {
      this.centreInterets = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.centreInteret = new CentreInteret();
    this.display = true;
    this.visible = false;
  }
  clickEdit(educ) {
    this.display = true;
    this.visible = true;
    Object.assign(this.centreInteret, educ);
  }
  ajouter() {
    this.centreInteret.cv = this.cv;
    this.centreInteretService.save(this.centreInteret).subscribe(res => {

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
        this.centreInteretService.delete(id).subscribe(res => {

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
    this.centreInteretService.update(this.centreInteret).subscribe(res => {

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

import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {Education} from '../../shared/model/education';
import {EducationService} from '../../shared/services/education.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
@Input()  cv: Cv;
  educations: Education[];
  education = new Education();
  display = false;
  visible = false;
  constructor(private educationService: EducationService,
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
    this.educationService.getByCv(this.cv.id).subscribe(data => {
      this.educations = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.education = new Education();
    this.display = true;
    this.visible = false;
  }
  clickEdit(educ) {
    this.display = true;
    this.visible = true;
    Object.assign(this.education, educ);
  }
  ajouter() {
    this.education.cv = this.cv;
    this.educationService.save(this.education).subscribe(res => {

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
        this.educationService.delete(id).subscribe(res => {

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
    this.educationService.update(this.education).subscribe(res => {

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

import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {Experience} from '../../shared/model/experience';
import {ExperienceService} from '../../shared/services/experience.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()  cv: Cv;
  experiences: Experience[];
  experience = new Experience();
  display = false;
  visible = false;
  constructor(private experienceService: ExperienceService,
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
    this.experienceService.getByCv(this.cv.id).subscribe(data => {
      this.experiences = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.experience = new Experience();
    this.display = true;
    this.visible = false;
  }
  clickEdit(educ) {
    this.display = true;
    this.visible = true;
    Object.assign(this.experience, educ);
  }
  ajouter() {
    this.experience.cv = this.cv;
    this.experienceService.save(this.experience).subscribe(res => {

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
        this.experienceService.delete(id).subscribe(res => {

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
    this.experienceService.update(this.experience).subscribe(res => {

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

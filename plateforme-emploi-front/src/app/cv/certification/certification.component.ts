import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {Certification} from '../../shared/model/certification';
import {CertificationService} from '../../shared/services/certification.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CvService} from '../../shared/services/cv.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  @Input()  cv: Cv;
  certifications: Certification[];
  certification = new Certification();
  display = false;
  visible = false;
  constructor(private certificationService: CertificationService,
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
    this.certificationService.getByCv(this.cv.id).subscribe(data => {
      this.certifications = data;
    }, ex => {
      console.log(ex);
    });
  }

  clickAdd() {
    this.certification = new Certification();
    this.display = true;
    this.visible = false;
  }
  clickEdit(educ) {
    this.display = true;
    this.visible = true;
    Object.assign(this.certification, educ);
  }
  ajouter() {
    this.certification.cv = this.cv;
    this.certificationService.save(this.certification).subscribe(res => {

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
        this.certificationService.delete(id).subscribe(res => {

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
    this.certificationService.update(this.certification).subscribe(res => {

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

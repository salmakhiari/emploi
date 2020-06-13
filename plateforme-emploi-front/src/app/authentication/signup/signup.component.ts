import {Component} from '@angular/core';

import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Candidat} from '../../shared/model/candidat';
import {CandidatService} from '../../shared/services/candidat.service';
import {UploadService} from '../../shared/services/upload.service';
import {HttpResponse} from '@angular/common/http';
import {RegisterService} from '../../shared/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  candidat = new Candidat();
  confirmPwd: any;
  selectedFiles: FileList;
  currentFile: File;
  chooseFile = 'Choisir Image';

  constructor(private registerService: RegisterService,
              private messageService: MessageService,
              private router: Router,
              private uploadService: UploadService) {
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFile = this.selectedFiles[0];
    this.chooseFile = this.currentFile.name;
  }

  register() {
    if (!this.currentFile) {
      this.save();
    } else {
      this.upload();
    }
  }

  save() {
    this.registerService.registerCandidat(this.candidat).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        this.router.navigate(['/authentication/login']);
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  upload() {
    this.uploadService.upload(this.currentFile).subscribe(res => {
      if (res instanceof HttpResponse) {
        this.candidat.image = res.body;
        this.save();
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }
}

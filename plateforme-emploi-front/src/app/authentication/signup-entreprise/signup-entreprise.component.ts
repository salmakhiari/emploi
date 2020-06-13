import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../shared/model/entreprise';
import {EntrepriseService} from '../../shared/services/entreprise.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {UploadService} from '../../shared/services/upload.service';
import {HttpResponse} from '@angular/common/http';
import {RegisterService} from '../../shared/services/register.service';

@Component({
  selector: 'app-signup-entreprise',
  templateUrl: './signup-entreprise.component.html',
  styleUrls: ['./signup-entreprise.component.css']
})
export class SignupEntrepriseComponent implements OnInit {
  entreprise = new Entreprise();
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
    this.registerService.registerEntreprise(this.entreprise).subscribe(res => {
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
        this.entreprise.image = res.body;
        this.save();
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  ngOnInit(): void {
  }

}

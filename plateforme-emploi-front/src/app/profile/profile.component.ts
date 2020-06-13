import {Component, OnInit} from '@angular/core';

import {MessageService} from 'primeng/api';
import {UtilisateurService} from '../shared/services/utilisateur.service';
import {HttpResponse} from '@angular/common/http';
import {UploadService} from '../shared/services/upload.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CandidatService} from '../shared/services/candidat.service';
import {EntrepriseService} from '../shared/services/entreprise.service';
import {AdminstrateurService} from '../shared/services/adminstrateur.service';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any = {};

  role;
  pwd = {id: '', oldPassword: '', newPassword: '', confirmPassword: ''};
  selectedFiles: FileList;
  currentFile: File;
  chooseFile = 'Choisir Image';

  constructor(private utlisateurService: UtilisateurService,
              private messageService: MessageService,
              private uploadService: UploadService,
              private candidatService: CandidatService,
              private entrepriseService: EntrepriseService,
              private administrateurService: AdminstrateurService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.role = localStorage.getItem('role');
  }

  changePassword(f) {
    this.pwd.id = this.user.id;
    this.utlisateurService.changePassword(this.pwd).subscribe(res => {
      if (res.success) {
        f.form.reset();
        f.submitted = false;
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFile = this.selectedFiles[0];
    this.chooseFile = this.currentFile.name;
  }

  update() {
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    const roles = decodedToken.roles;
    if (!this.currentFile) {
      if (roles[0] === 'ROLE_CANDIDAT') {
        this.updateCandidat();
      } else if (roles[0] === 'ROLE_ENTREPRISE') {
        this.updateEntreprise();
      } else {
        this.updateAdmin();
      }
    } else {
      this.upload(roles[0]);

    }
  }


  upload(role) {
    this.uploadService.upload(this.currentFile).subscribe(res => {
      if (res instanceof HttpResponse) {
        this.user.image = res.body;
        if (role === 'ROLE_CANDIDAT') {
          this.updateCandidat();
        } else if (role === 'ROLE_ENTREPRISE') {
          this.updateEntreprise();
        } else {
          this.updateAdmin();
        }
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  updateCandidat() {
    this.candidatService.update(this.user).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        location.reload();
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  updateEntreprise() {
    this.entrepriseService.update(this.user).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        location.reload();
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }

  updateAdmin() {
    this.administrateurService.update(this.user).subscribe(res => {
      if (res.success) {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        location.reload();
      } else {
        this.messageService.add({severity: 'warn', summary: 'Attention', detail: res.message});
      }
    }, ex => {
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Opération non effectuée'});
      console.log(ex);
    });
  }
}

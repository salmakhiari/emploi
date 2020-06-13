import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilisateurService} from '../../shared/services/utilisateur.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  message;
  constructor(private activatedRoute: ActivatedRoute,
              private utlisateurService: UtilisateurService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.utlisateurService.validate(id).subscribe(res => {
      this.message = res.message;
    }, ex => {
      this.message = 'Compte non actif';
      console.log(ex);
    });
  }

}

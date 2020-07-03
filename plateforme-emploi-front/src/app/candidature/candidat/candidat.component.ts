import {Component, OnInit} from '@angular/core';
import {Candidature} from '../../shared/model/candidature';
import {CandidatureureService} from '../../shared/services/candidature.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  candidatures: Candidature[];

  constructor(private candidatureService: CandidatureureService) {
  }

  ngOnInit() {
    this.getByCandidat();
  }

  getByCandidat() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.candidatureService.getByCandidat(user.id).subscribe(data => {
      this.candidatures = data;
    }, ex => console.log(ex));
  }

}

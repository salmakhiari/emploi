import {Component, OnInit} from '@angular/core';
import {Candidature} from '../../shared/model/candidature';
import {CandidatureureService} from '../../shared/services/candidature.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  candidatures: Candidature[];

  constructor(private candidatureService: CandidatureureService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getByOffre(id);
  }

  getByOffre(id) {
    this.candidatureService.getByOffre(id).subscribe(data => {
      this.candidatures = data;
    }, ex => console.log(ex));
  }

}

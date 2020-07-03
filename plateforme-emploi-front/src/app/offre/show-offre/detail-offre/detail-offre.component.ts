import {Component, OnInit} from '@angular/core';
import {Offre} from '../../../shared/model/offre';
import {OffreService} from '../../../shared/services/offre.service';
import {ActivatedRoute} from '@angular/router';
import {CandidatureureService} from '../../../shared/services/candidature.service';
import {Candidature} from '../../../shared/model/candidature';
import {CvService} from '../../../shared/services/cv.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit {
  offre = new Offre();
  visible = false;

  constructor(private offreService: OffreService,
              private candidatureService: CandidatureureService,
              private cvService: CvService,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getOffreById(id);
    this.postuled(id);
  }

  getOffreById(id) {
    this.offreService.getById(id).subscribe(res => {
      this.offre = res;
    }, ex => console.log(ex));
  }

  postuled(id) {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.candidatureService.postuled(id, candidat.id).subscribe(res => {
      this.visible = res;
    }, ex => console.log(ex));
  }

  postuler() {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.cvService.getById(candidat.id).subscribe(result =>  {
      const candidature = new Candidature();
      candidature.offre = this.offre;
      candidature.cv = result;
      this.candidatureService.save(candidature).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Succès', detail: res.message});
        this.postuled(this.offre.id);
      }, ex => console.log(ex));
    }, ex => console.log(ex));
  }
}

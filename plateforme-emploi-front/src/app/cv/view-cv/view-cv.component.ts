import {Component, OnInit} from '@angular/core';
import {Cv} from '../../shared/model/cv';
import {Candidat} from '../../shared/model/candidat';
import {CvService} from '../../shared/services/cv.service';
import {Education} from '../../shared/model/education';
import {EducationService} from '../../shared/services/education.service';
import {ExperienceService} from '../../shared/services/experience.service';
import {Experience} from '../../shared/model/experience';
import {Langue} from '../../shared/model/langue';
import {Competence} from '../../shared/model/competence';
import {CentreInteret} from '../../shared/model/centre-interet';
import {CompetenceService} from '../../shared/services/competence.service';
import {LangueService} from '../../shared/services/langue.service';
import {CentreInteretService} from '../../shared/services/centre-interet.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.css']
})
export class ViewCvComponent implements OnInit {
  user = new Candidat();
  cv = new Cv();
  educations: Education[];
  experiences: Experience[];
  competences: Competence[];
  langues: Langue[];
  centreInterets: CentreInteret[];
  constructor(private cvService: CvService,
              private educationService: EducationService,
              private competenceService: CompetenceService,
              private langueService: LangueService,
              private centreInteretService: CentreInteretService,
              private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.cvService.getById(this.user.id).subscribe(res => {
      this.cv = res;
      this.getAllEducations();
      this.getAllExperiences();
      this.getAllComptences();
      this.getAllLangues();
      this.getAllCentreInters();
    }, ex => {
      console.log(ex);
    });
  }


  getAllEducations() {
    this.educationService.getByCv(this.cv.id).subscribe(data => {
      this.educations = data;
    }, ex => {
      console.log(ex);
    });
  }
  getAllExperiences() {
    this.experienceService.getByCv(this.cv.id).subscribe(data => {
      this.experiences = data;
    }, ex => {
      console.log(ex);
    });
  }

  getAllComptences() {
    this.competenceService.getByCv(this.cv.id).subscribe(data => {
      this.competences = data;
    }, ex => {
      console.log(ex);
    });
  }

  getAllLangues() {
    this.langueService.getByCv(this.cv.id).subscribe(data => {
      this.langues = data;
    }, ex => {
      console.log(ex);
    });
  }
  getAllCentreInters() {
    this.centreInteretService.getByCv(this.cv.id).subscribe(data => {
      this.centreInterets = data;
    }, ex => {
      console.log(ex);
    });
  }

  getPercent() {
    return '80%';
  }
}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Cv} from '../shared/model/cv';
import {CvService} from '../shared/services/cv.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cv = new Cv();

  constructor(private cvService: CvService) {
  }

  ngOnInit() {
    this.getCv();
  }
  getCv() {
    const candidat = JSON.parse(localStorage.getItem('currentUser'));
    this.cv.candidat = candidat;
    this.cvService.getById(candidat.id).subscribe(res => {
      console.log(res);
      if (res) {
        this.cv = res;
        console.log(res);
      }
    }, ex => {
      console.log(ex);
    });
  }
  changeTitre() {
    this.cvService.save(this.cv).subscribe(res => {
      console.log(res);
    if (res.success) {
        this.getCv();
      }
    }, ex => {
      console.log(ex);
    });
  }



}

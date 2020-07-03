import {Component, OnInit} from '@angular/core';
import {Offre} from '../../shared/model/offre';
import {OffreService} from '../../shared/services/offre.service';

@Component({
  selector: 'app-show-offre',
  templateUrl: './show-offre.component.html',
  styleUrls: ['./show-offre.component.css']
})
export class ShowOffreComponent implements OnInit {
  offres: Offre[];

  constructor(private offreService: OffreService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.offreService.getValidOffre().subscribe(data => {
      this.offres = data;
    }, ex => console.log(ex));
  }

}

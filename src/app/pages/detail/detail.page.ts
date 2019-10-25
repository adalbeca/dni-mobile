import { Expedientes } from './../../interfaces/interfaces';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: Expedientes;
  tmpData: {
    exp: '',
    fechaNac: '' };
constructor(
      private route: ActivatedRoute,
      private router: Router,
      private dataService : DataService,
      ) {
    this.route.queryParams.subscribe(params => {
      console.log('??', this.router.getCurrentNavigation().extras.state);
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = <Expedientes> this.router.getCurrentNavigation().extras.state;
      } else {
        this.data = <Expedientes>this.tmpData;
      }
    });
  }

  ngOnInit() {
    console.log('Llega', this.data );
  }

  saveFavorite(){
      const value = { exp: this.data.exp, fechaNac: this.data.nacimiento }
      this.dataService.setDataStorage( value );
  }

}

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
    exp: '1410852017',
    fechaNac: '05/05/1983' };
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
        this.data = this.tmpData;
      }
    });
  }

  ngOnInit() {
    console.log('Llega', this.data );
  }

  saveFavorite(){
      const value = { exp: this.data.exp, fechaNac: this.data.fechaNac }
      this.dataService.setDataStorage( value );
  }

}

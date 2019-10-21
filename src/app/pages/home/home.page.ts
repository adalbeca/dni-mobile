import { Expedientes } from './../../interfaces/interfaces';
import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    exp: string = '';
    dia: string = '';
    mes: string = '';
    anio: string = '';
    fecha: string = '';
    maxDate: Date = new Date();
    customPickerOptions;
    myData: object;
    tempData: Expedientes[] = [];
    isChecked: false;
   
    constructor(
        private storage: Storage,
        private router: Router,
        public dataService: DataService ) 
        {     
            this.dataService.getDataStorage().then(data=> {
                if(data){
                data.map(data=>this.tempData.push(data))
                } else {
                    this.tempData=null;
                }
            }); 
        }


    ngOnInit() {
       
        this.customPickerOptions = {
            buttons: [{
                text: 'Ok',
                handler: ( evento ) => console.log('Clicked Save!', evento)
            }, {
                text: 'Cancelar',
                handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return true;
                }
            }]
        };
    }

    getDate(event) {
        const date = moment(event.detail.value);
        this.dia = date.format('DD');
        this.mes = date.format('MM');
        this.anio = date.format('YYYY');
    }

    getInput(event) {
        this.exp = event.detail.value;
    }

    setStorage(event) {
        if (!event.target.checked) {
            this.dataService.setChecked(true);
        } else {
            this.storage.remove('data');
            this.dataService.setChecked(false);
        }
        this.isChecked = event.target.checked;
    }


    async buscame(event) {
        console.log('event', event)
        const data = await this.tempData.find(data=> data.exp === event);
        const datax = {exp: data.exp, dia:data.dia, mes:data.mes, anio: data.anio};
        this.queryData(datax);
    }

    queryData(data){
        console.log('Llega', data)
        this.dataService.getData(data)
        .subscribe(value => {
            console.log(value);
            this.router.navigate(['detail'], {state: value });
        });
    }

    async getFromData() {
        if (this.exp) {
            const tempDataJoha = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
            const tempDataAnna = {exp: '1382022017', dia: '03', mes: '10', anio: '2010'};
            const data = {exp: this.exp, dia: this.dia, mes: this.mes, anio: this.anio};
           this.queryData(data);
        }
    }
}

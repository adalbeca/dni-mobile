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
    tempData: object;
    isChecked: false;
   
    constructor(
        private storage: Storage,
        private router: Router,
        public dataService: DataService ) 
        {   }


    ngOnInit() {
        this.getStorage('data');
        this.getStorage('checked');
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

     getStorage(name: string){
        this.dataService.getDataStorage(name).then(data => {
            if(name==='data') {
                const datax=JSON.parse(data);
                if(data){
                this.fecha = `${datax.dia}-${datax.mes}-${datax.anio}`;
                this.exp = datax.exp
                }
            } else {
                this.isChecked = data;
            }
        })
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

    async getFromData() {
        if (this.exp) {
            const tempDataJoha = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
            const tempDataAnna = {exp: '1382022017', dia: '03', mes: '10', anio: '2010'};
            const data = {exp: this.exp, dia: this.dia, mes: this.mes, anio: this.anio};
            console.log(this.isChecked);
            await this.dataService.getData(data)
                .subscribe(value => {
                    if (value && !this.isChecked) {
                            this.dataService.setDataStorage(JSON.stringify(data));
                    }
                    this.router.navigate(['detail'], value);
                })
            ;
        }
    }
}

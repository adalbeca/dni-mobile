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
    exp: string;
    dia: string;
    mes: string;
    anio: string;
    maxDate: Date = new Date();
    customPickerOptions;
    myData: object;
    tempData: object;
    isChecked: false;
    defaultData: object;

    constructor(
        private storage: Storage,
        private router: Router,
        private dataService: DataService ) {
        this.storage.get('data').then((val) => {
            console.log('el storage', val);
            this.defaultData = val;
        });

    }
    ngOnInit() {

        this.storage.get('checked').then(val => this.isChecked = val);
        console.log('reviso', this.defaultData);

        this.customPickerOptions = {
            buttons: [{
                text: 'Ok',
                handler: (evento) => console.log('Clicked Save!', evento)
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
            this.storage.set('checked', true);
        } else {
            this.storage.remove('data');
            this.storage.set('checked', false);
        }
        this.isChecked = event.target.checked;
    }

    async getFromData() {
        if (this.exp) {
            this.tempData = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
            const data = {exp: this.exp, dia: this.dia, mes: this.mes, anio: this.anio};
            await this.dataService.getData(data)
                .subscribe(value => {
                    console.log('chequeo', this.isChecked);
                    console.log('llega', value);
                    if (value) {
                        if (this.isChecked) {
                            this.storage.set('data', JSON.stringify(data));
                        }
                    }
                    this.router.navigate(['detail'], value);
                })
            ;
        }
    }

}

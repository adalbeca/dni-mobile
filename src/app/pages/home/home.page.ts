import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

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

    constructor(private router: Router, private dataService: DataService ) {
    }

    ngOnInit() {
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
        console.log(this.maxDate.toISOString());
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

    getFromData() {
        const data = {exp: this.exp, dia: this.dia, mes: this.mes, anio: this.anio};
        this.dataService.getData(data)
            .subscribe((value) => this.myData = value);
        this.router.navigate(['detail'], this.myData);
    }

}

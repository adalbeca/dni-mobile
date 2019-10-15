import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let HomePage = class HomePage {
    constructor(storage, router, dataService) {
        this.storage = storage;
        this.router = router;
        this.dataService = dataService;
        this.maxDate = new Date();
        const miro = this.dataService.getDataStorage('data');
    }
    ngOnInit() {
        console.log('OnInit');
        this.dataService.getDataStorage('checked');
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
    ionViewDidEnter() {
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
            this.dataService.setDataStorage('checked', true);
            this.storage.set('checked', true);
        }
        else {
            this.storage.remove('data');
            this.dataService.setDataStorage('checked', false);
        }
        this.isChecked = event.target.checked;
    }
    getFromData() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.exp) {
                this.tempData = { exp: '1410852017', dia: '05', mes: '05', anio: '1983' };
                const data = { exp: this.exp, dia: this.dia, mes: this.mes, anio: this.anio };
                yield this.dataService.getData(data)
                    .subscribe(value => {
                    console.log('chequeo', this.isChecked);
                    console.log('llega', value);
                    if (value) {
                        if (this.isChecked) {
                            this.dataService.setDataStorage('data', JSON.stringify(data));
                        }
                    }
                    this.router.navigate(['detail'], value);
                });
            }
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Storage,
        Router,
        DataService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map
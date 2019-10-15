import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
let DataService = class DataService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    getData(data) {
        //const data = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
        return this.http.post('https://api-dni.adalbeca.com/giveme', data);
    }
    setDataStorage(name, data) {
        this.storage.set(name, data);
    }
    getDataStorage(data) {
        this.storage.get(data).then((val) => val);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Storage])
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map
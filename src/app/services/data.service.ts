import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    ) { }

  getData(data) {
    //const data = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
    return this.http.post('https://api-dni.adalbeca.com/giveme', data);
  }

  setDataStorage(name:string, data){
    console.log('Guardando', name, data);
    this.storage.set(name, data);
  }

  getDataStorage(data){
      return this.storage.get(data);
    }
}
 

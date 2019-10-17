import { Operacion } from './../interfaces/interfaces';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  private operacion = {
    exp: 123,
    dia: '',
    mes: '',
    anio: '',
  };


  constructor(
    private http: HttpClient,
    private storage: Storage,
    ) {}

  getData(data) {
    //const data = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
    return this.http.post('https://api-dni.adalbeca.com/giveme', data);
  }

  setDataStorage(data){
    const exists= this.operacion.exp === data.exp;
    if (!exists) {
      this.operacion = data;
      this.storage.set('data', this.operacion);
    }
  }

  async getChecked(){
    const favs = await this.storage.get('checked');
    console.log(favs);
    return favs;
  }

  setChecked( value ){
      this.storage.set('checked', value);
  } 

  getDataStorage(name: string){
    return this.storage.get(name);
  }
}
 

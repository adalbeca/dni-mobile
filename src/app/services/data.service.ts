import { Respuesta, Expedientes } from './../interfaces/interfaces';
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
  expedientes : Expedientes[] = [];


  constructor(
    private http: HttpClient,
    private storage: Storage,
    ) {}

  getData(data) {
    //const data = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
    return this.http.post<Respuesta>('https://api-dni.adalbeca.com/giveme', data);
  }

  async setDataStorage(data){
    const findme = await this.getDataStorage().then(data=> data ? data.find(info=>info.exp === data.exp) : false );
      if(!findme) {
        await this.expedientes.push(data)
        this.storage.set('data', this.expedientes);
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

  getDataStorage(){
    return this.storage.get('data');
  }
}
 

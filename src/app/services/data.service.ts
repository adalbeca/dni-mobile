import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(data) {
    //const data = {exp: '1410852017', dia: '05', mes: '05', anio: '1983'};
    return this.http.post('https://api-dni.adalbeca.com/giveme', data);
  }
}

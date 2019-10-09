import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    maxDate: Date = new Date();

    constructor() {
    }

    ngOnInit() {
      console.log(this.maxDate.toISOString());
    }

    getDate(event) {
        console.log(event.detail.value);
    }
    getInput(event){
      console.log(event.detail.value);
    }

}

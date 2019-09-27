import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {HeaderHomeComponent} from './header-home/header-home.component';



@NgModule({
  declarations: [HeaderComponent, HeaderHomeComponent],
  exports: [ HeaderComponent, HeaderHomeComponent ],
  imports: [
      IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }

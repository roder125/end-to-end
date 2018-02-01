import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  summe: number;

  constructor(public navCtrl: NavController) {
  }

  zahlen(summe){
    console.log("____________________");
    console.log(summe);
    }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { test } from '../../app/models';

/**
 * Generated class for the Modal4_4_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal4-4-1',
  templateUrl: 'modal4-4-1.html',
})
export class Modal4_4_1Page {

  amountRecieve: test = new test;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal4_4_1Page');
  }

  ionViewDidEnter() {
    this.amountRecieve = this.navParams.data._amount;
    console.log(this.amountRecieve);
  }

  confirm() {
    this.navCtrl.pop();
    console.log(this.amountRecieve);
  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { other } from '../../app/models';

/**
 * Generated class for the ModalOtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-other',
  templateUrl: 'modal-other.html',
})
export class ModalOtherPage {

  otherReceive : other = new other;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalOtherPage');
  }

  ionViewDidEnter() {
    this.otherReceive = this.navParams.data._other;
  }

  confirm() {
    this.navCtrl.pop();
  }

}

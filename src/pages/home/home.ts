import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Modal4_4_1Page } from '../modal4-4-1/modal4-4-1';
import { test } from '../../app/models';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  preNessery: test = new test;
  

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidEnter() {

  }

  modalshow() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  presentModal(amount: test) {
    const modal = this.modalCtrl.create(Modal4_4_1Page, { _amount: amount });
    modal.present();
  }


}

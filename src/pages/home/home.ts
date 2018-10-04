import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Modal4_4_1Page } from '../modal4-4-1/modal4-4-1';
import { test } from '../../app/models';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  preNessery: test = new test;
  // NameOrganizeForm : FormControl;
  // LocationForm : FormControl;
  // UnitForm :FormControl;
  // SchoolForm : FormGroup;
  // personnelForm : FormControl;
  // hotelForm : FormGroup;
  // hospitalForm : FormGroup;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public fb: FormBuilder) {
    this.preNessery.amount = 0;
    // //4.1
    // this.NameOrganizeForm = new FormControl('');
    // //4.2
    // this.LocationForm = new FormControl('');
    // //4.3
    // this.UnitForm = new FormControl('');
    // //4.4 (1) school
    // //4.4.1-4.1.2
    // this.SchoolForm = this.fb.group({
    //   preNessery : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   nessery : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   kid : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   primarySchool : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   highSchool : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   pvs : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   }),
    //   university : this.fb.group({
    //     checkBox : [''],
    //     count : ['']
    //   })
    // });
    // //4.4.3
    // this.personnelForm = new FormControl('');

    // //4.4(2)
    // this.hotelForm = this.fb.group({
    //   roomCount : [''],
    //   personnelCount : ['']
    // })

    // //4.4(3)
    // this.hospitalForm = this.fb.group({
    //   bedCount : [''],
    // })


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

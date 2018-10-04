import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalOtherPage } from './modal-other';

@NgModule({
  declarations: [
    ModalOtherPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalOtherPage),
  ],
})
export class ModalOtherPageModule {}

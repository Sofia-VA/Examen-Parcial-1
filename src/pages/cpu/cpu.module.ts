import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpuPage } from './cpu';

@NgModule({
  declarations: [
    CpuPage,
  ],
  imports: [
    IonicPageModule.forChild(CpuPage),
  ],
})
export class CpuPageModule {}

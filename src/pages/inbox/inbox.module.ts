import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InboxPage } from './inbox';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(InboxPage),
  ],
})
export class InboxPageModule {}

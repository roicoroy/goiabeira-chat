import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root : string;
  tab2Root : string;
  tab3Root : string;

  constructor() {
    this.tab1Root = 'InboxPage';
    this.tab2Root = 'ChannelsPage';
    this.tab3Root = 'ProfilePage';
  }
}

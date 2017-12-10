import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataService } from '../../providers/data.service';
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController,
    private data:DataService,
  ) {
  }
  login(event: LoginResponse) {
    console.log(event);
    if (!event.error) {
      this.toast.create({
        message: `Welcome to ... ${event.result.email}` ,
        duration: 3000
      }).present();
      this.data.getProfile(<User>event.result).subscribe(profile => {
        console.log(profile);
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })

      // this.navCtrl.setRoot('EditProfilePage')
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration:3000
      }).present();
    }

  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {
  }
  login(event: LoginResponse) {
    console.log(event);
    if (!event.error) {
      this.toast.create({
        message: 'Welcome to ... ${event.result.email}' ,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('EditProfilePage')
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration:3000
      }).present();
    }

  }


}

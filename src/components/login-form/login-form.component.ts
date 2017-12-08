import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  
  
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;


  constructor(
    private navCtrl: NavController, private auth: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
  async login() {
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(loginResponse);
    
    // try {
    //   const result: LoginResponse = {
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    // }
    //   this.loginStatus.emit(result);
    //   // console.log(result);
    // }
    // catch(e) {
    //   console.error(e);
    //   // this.loginStatus.emit(e);

    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error);
    // }
    
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage')
  }


  // navigateToPage(pageName: string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }

}

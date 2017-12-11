import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';


@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit  {
  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;

 @Output() existingProfile: EventEmitter<Profile>;


  constructor(private data: DataService, private auth:AuthService, private loading: LoadingController) {
    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: 'Loading Profile...'
    })
    // console.log('Hello ProfileViewComponent Component');
    
  }
  ngOnInit(): void {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe( (user: User) => {
      this.data.getProfile(user).subscribe(profile => {
        this.userProfile = <Profile>profile.val();
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      })
    })
  }

}

import { Component, OnDestroy, Output, Input,   EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

import { Profile } from '../../models/profile/profile.interface';

import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service'; 



@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;
  
  // profile = {} as Profile ;

  constructor(private data: DataService, private auth: AuthService) {

    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user; 
    })
  }

  ngOnInit(): void {
    if (!this.profile){
      this.profile = {} as Profile;
    }
  }
  async saveProfile(){
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
      console.log(result);
    } 
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented");
    this.authenticatedUser$.unsubscribe();
  }

}

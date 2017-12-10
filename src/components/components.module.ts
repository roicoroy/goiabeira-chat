import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileSearchComponent } from './profile-search.component/profile-search.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { RegisterFormComponent } from './register-form/register-form.component';






@NgModule({
	declarations: [
	EditProfileFormComponent,
	LoginFormComponent,
	ProfileSearchComponent,
	ProfileViewComponent,
	RegisterFormComponent
	],
	imports: [
		IonicModule
	],
	exports: [
	EditProfileFormComponent,
	LoginFormComponent,
	ProfileSearchComponent,
	ProfileViewComponent,
	RegisterFormComponent
	]
})
export class ComponentsModule {}

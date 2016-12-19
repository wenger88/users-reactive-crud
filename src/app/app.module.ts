import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { PuppiesComponent } from './puppies';
import { OttersComponent } from './otters';
import { KittensComponent } from './kittens';

import { SharedModule } from './shared';
import {UsersListComponent} from "./users/users-list.component";
import {UsersService} from "./core/users.service";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {UserCreateComponent} from "./users/user-create/user-create.component";

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		BrowserModule,		
		SharedModule,
		routing,
        ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		PuppiesComponent,
		OttersComponent,
		KittensComponent,
		UsersListComponent,
        UserDetailsComponent,
        UserEditComponent,
        UserCreateComponent
	],
	providers: [
		appRoutingProviders,
        UsersService
	], 
	exports: [],
	bootstrap: [AppComponent],
})

export class AppModule {}

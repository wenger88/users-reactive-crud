import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuppiesComponent } from '../../puppies';
import { OttersComponent } from '../../otters';
import { KittensComponent } from '../../kittens';
import {UsersListComponent} from "../../users/users-list.component";
import {UserDetailsComponent} from "../../users/user-details/user-details.component";
import {UserEditComponent} from "../../users/user-edit/user-edit.component";
import {UserCreateComponent} from "../../users/user-create/user-create.component";

const appHeaderRoutes: Routes = [
    {
        path: '',
        redirectTo: '/puppies',
        pathMatch: 'full'
    },
	{
		path: 'puppies',
		component: PuppiesComponent
	},
	{
		path: 'otters',
		component: OttersComponent
	},
	{
		path: 'kittens',
		component: KittensComponent
	},
	{
		path: 'users',
		component: UsersListComponent
	},
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    },
    {
        path: 'user-edit/:id',
        component: UserEditComponent
    },
    {
        path: 'create',
        component: UserCreateComponent
    }

];

export const appHeaderRouting: ModuleWithProviders = RouterModule.forChild(appHeaderRoutes);
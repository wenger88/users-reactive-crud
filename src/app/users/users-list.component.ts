/**
 * Created by goran.pavlovski on 12/19/2016.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../shared/interfaces";
import {UsersService} from "../core/users.service";
@Component({
    selector: 'user-list',
    template: require('./users-list.component.html'),
    styles: [require('./users-list.component.scss')]
})

export class UsersListComponent implements OnInit{

    users: User[];

    constructor(private dataService: UsersService){}

    ngOnInit(): void {
        this.getAll();
    }

    getAll(){
        this.dataService.getUsers()
            .subscribe((user: User[]) => {
                this.users = user;
            })
    }

}
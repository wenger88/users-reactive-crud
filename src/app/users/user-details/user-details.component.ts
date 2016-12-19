/**
 * Created by goran.pavlovski on 12/19/2016.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/interfaces";
import {UsersService} from "../../core/users.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
@Component({
    selector: 'user-details',
    template: require('./user-details.component.html'),
    styles: [require('./user-details.component.scss')]
})

export class UserDetailsComponent implements OnInit{

    user: User;

    constructor(private dataService: UsersService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            this.dataService.getUser(params['id'])
                .subscribe((user: User) => {
                    this.user = user
                })
        })

    }
}
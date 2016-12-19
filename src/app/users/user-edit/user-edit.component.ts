/**
 * Created by goran.pavlovski on 12/19/2016.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../../shared/interfaces";
import {UsersService} from "../../core/users.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder, FormGroup, Validators, FormArray, Form} from "@angular/forms";
import * as _ from 'lodash';


@Component({
    selector: 'user-edit',
    template: require('./user-edit.component.html'),
    styles: [require('./user-edit.component.scss')]
})

export class UserEditComponent implements OnInit{

    user: User;
    userForm: FormGroup;
    address: FormArray;
    _ = require('lodash');

    constructor(private fb: FormBuilder,private dataService: UsersService, private router: Router, private route: ActivatedRoute){

    }
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.dataService.getUser(params['id'])
                .subscribe((user: User) => {
                    this.user = user
                    this.userForm = this.fb.group({
                        name: [this.user.name],
                        email: [this.user.email],
                        phone: [this.user.phone],
                        address: this.buildAddressArray()
                    })
                })
        })


    }

    buildAddressArray(): FormArray {
        let arr: any[] = [];
        _.forEach(this.user.address, (address, i) => {
            arr.push(this.buildAddressGroup(i));
        });
        this.address = this.fb.array(arr);

        return this.address;
    }

    buildAddressGroup(index: number):FormGroup{
        return this.fb.group({
            street: [this.user.address[index].street ],
            suite: [this.user.address[index].suite],
            city: [this.user.address[index].city],
            zipcode: [this.user.address[index].zipcode]
        })

    }

    addAddress(){
        let newAddress = this.fb.group({
            street: ['' ],
            suite: [''],
            city: ['', Validators.required],
            zipcode: ['']
        })
        this.address.push(newAddress);
    }

    onSubmit(){
        Object.assign(this.user, this.userForm.value);
        this.dataService.updateUser(this.user)
            .subscribe((status: boolean) => {
                if (status){
                    this.router.navigate(['/user-details', this.user.id])
                }else{
                    console.log("Unable to save user");
                }
            })
    }


}

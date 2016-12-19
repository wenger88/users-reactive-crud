/**
 * Created by goran.pavlovski on 12/19/2016.
 */

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormArray, FormBuilder, Validators, FormControl} from "@angular/forms";
import {UsersService} from "../../core/users.service";
import {User} from "../../shared/interfaces";
import {Router, ActivatedRoute} from "@angular/router";
import {error} from "util";
@Component({
    selector: 'user-create',
    template: require('./user-create.component.html'),
    styles: [require('./user-create.component.scss')]
})

export class UserCreateComponent implements OnInit{

    user = <User>{};
    userForm: FormGroup;
    address: FormArray;
    postToServer: string;

    constructor(private fb: FormBuilder,private dataService: UsersService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(): void {

        this.userForm = this.fb.group({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            phone: new FormControl(''),
            address: this.buildAddressArray()
        })

    }

    buildAddressArray(): FormArray {

        this.address = this.fb.array([
            this.buildAddressGroup()
        ]);

        return this.address;
    }

    buildAddressGroup():FormGroup{
        return this.fb.group({
            street: ['' ],
            suite: [''],
            city: [''],
            zipcode: ['']
        })

    }

    addAddress(){
        this.address.push(this.buildAddressGroup());
    }

    onSubmit(){
        Object.assign(this.user, this.userForm.value);
        this.dataService.addUser(this.user)
            .subscribe(
                (data) => {
                    this.postToServer = JSON.stringify(data);
                    this.router.navigate(['/users']);
                },
                error => console.log("Error HTTP Post Service"),
                () => console.log("Job Done Post!")
            );
    }

}
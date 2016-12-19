/**
 * Created by goran.pavlovski on 12/19/2016.
 */


export interface User{
    id: number;
    name: string;
    phone: string;
    email: string;
    address: Address[];
}

export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {User} from "../shared/interfaces";
import {Observable} from "rxjs";
import 'rxjs/Rx';
/**
 * Created by goran.pavlovski on 12/19/2016.
 */

@Injectable()
export class UsersService {

    url: string = "http://localhost:3000/users";
    users: User[];

    constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get(this.url)
            .map((res: Response) => res.json())
    }

    getUser(id: number) {
        return this.http.get(this.url + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    updateUser(user: User) {
        return this.http.put(this.url + '/' + user.id, user)
            .map((res: Response) => <User>res.json())
            .catch(this.handleError);
    }


    addUser(body: Object): Observable<User> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.url, bodyString, options)
            .map((res: Response) => <User>res.json())
            .catch(this.handleError)
    }

    deleteUser(id: number){
        return this.http.delete(this.url + '/' + id)
            .catch(this.handleError)
    }


    private handleError(error: Response) {
        return Observable.throw(error || 'Server error');
    }


}
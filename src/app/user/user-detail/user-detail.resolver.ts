import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { UserService } from "../user.service";
import { Observable } from "rxjs";
import { User } from "src/app/types/User";



@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User>{
    constructor(private userService: UserService) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): User | Observable<User> | Promise<User> {
        // debugger
        return this.userService.fetchSingleUser(route.params['id'])
    }

}

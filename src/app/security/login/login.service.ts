import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { MEAT_API } from 'app/app.api';
import { User } from './user.model';


@Injectable()
export class LoginService {

    user: User;
    lasturl: string;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.router.events
            .pipe(
                filter( event => event instanceof NavigationEnd)
            )
            .subscribe(( navigation: NavigationEnd) => this.lasturl = navigation.url )
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, {
            email: email,
            password: password
        })
        .pipe(
            tap((user: User) => this.user = user)
        )
    }

    logout(): void {
        this.user = undefined
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lasturl): void {
        this.router.navigate(['/login', btoa(path)])
    }
}

import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanLoad {
    canLoad(route: Route): boolean {
        return true;
    }
}



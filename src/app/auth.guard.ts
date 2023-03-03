import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private oauthService: OAuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let hasIdToken = this.oauthService.hasValidIdToken();
    let hasAccessToken = this.oauthService.hasValidAccessToken();

    //TODO: not passing guard for some reason
    if (hasIdToken && hasAccessToken) {
      console.log('passed guard');
      return true;
    } else {
      console.log('failed guard, redirecting to welcome page');
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}

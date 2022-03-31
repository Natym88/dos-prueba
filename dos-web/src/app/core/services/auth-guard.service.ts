import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import {isNullOrUndefined} from 'util';
import {RoleService} from '../../shared/services/role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: OAuthService, private roleService: RoleService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.hasValidAccessToken()) {
      this.authService.initCodeFlow(state.url);
      return false;
    }
    const isAuthorized = this.isAuthorized(next.data.allowedRoles);
    if (!isAuthorized) {
      this.router.navigateByUrl('/forbidden');
      return false;
    }
    return isAuthorized;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.hasValidAccessToken()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    const isAuthorized = this.isAuthorized(next.data.allowedRoles);
    if (!isAuthorized) {
      this.router.navigateByUrl('/forbidden');
      return false;
    }
    return isAuthorized;
  }

  isAuthorized(allowedRoles: string): boolean {
    if (isNullOrUndefined(allowedRoles) || allowedRoles.length === 0) {
      return true;
    }

    return this.roleService.validateUserRoles(allowedRoles);
  }
}

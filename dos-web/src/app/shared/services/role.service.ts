import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {UserData} from '../../models/userData';
import {isNullOrUndefined} from 'util';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private oAuthService: OAuthService) {
  }

  validateUserRoles(roles: string): boolean {
    // if (!environment.production) {
    //   return true;
    // }
    if (isNullOrUndefined(roles)) {
      return true;
    }
    const userData = Object.assign(new UserData(), this.oAuthService.getIdentityClaims());
    if (!isNullOrUndefined(userData) && !isNullOrUndefined(userData.role)) {
      try {
        if (roles.indexOf(',') > 1) {
          return roles.split(',').some(i => userData.role.includes(i.trim()));
        } else {
          return userData.role.includes(roles);
        }
      } catch (e) {
        console.log(e);
        return userData.role.includes(roles);
      }

    } else {
      return false;
    }
  }

  getAllUserRoles(): Array<string> {
    const userData = Object.assign(new UserData(), this.oAuthService.getIdentityClaims());

    if (isNullOrUndefined(userData)) {
      return new Array<string>();
    }

    return userData.role;
  }

  hasAnyRoles(): boolean {
    const userData = Object.assign(new UserData(), this.oAuthService.getIdentityClaims());
    if (isNullOrUndefined(userData)) {
      return false;
    }

    if (!isNullOrUndefined(userData.role)) {
      return userData.role.length > 0;
    } else {
      return false;
    }

  }
}

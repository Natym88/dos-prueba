import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {RoleService} from '../services/role.service';
import {isNullOrUndefined} from 'util';
import {OAuthService} from 'angular-oauth2-oidc';

@Directive({
  selector: '[appUserIsInRole]'
})
export class UserIsInRoleDirective implements OnInit, OnDestroy {
  @Input('appUserIsInRole') roles: string;
  stop$ = new Subject();
  isVisible = false;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>,
              private roleServiceService: RoleService, private oAuthService: OAuthService) {
  }

  ngOnInit() {
    if (this.oAuthService.hasValidAccessToken()) {
      this.viewContainerRef.clear();
    }
    if (!this.roleServiceService.hasAnyRoles()) {
      this.viewContainerRef.clear();
    }

    if (isNullOrUndefined(this.roles) || this.roles.trim() === '') {
      this.viewContainerRef.clear();
    }

    if (this.roleServiceService.validateUserRoles(this.roles)) {

      if (!this.isVisible) {

        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      this.isVisible = false;
      this.viewContainerRef.clear();
    }
  }

  ngOnDestroy() {
    this.stop$.next();
  }
}

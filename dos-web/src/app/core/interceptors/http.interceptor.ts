import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import {catchError, map} from 'rxjs/operators';
import {ErrorService} from '../../shared/services/error.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {
  AlertDialogCommonComponent,
  AlertDialogData
} from '../../shared/components/dialogs/alert-dialog-common/alert-dialog-common.component';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private auth: OAuthService, private errorService: ErrorService, private dialog: MatDialog) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.errorService.clean();

    if (this.auth.hasValidAccessToken()) {

      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + this.auth.getAccessToken()
        }
      });

    } else {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && !environment.production) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        const config = new MatDialogConfig();
        config.width = '400px';
        config.autoFocus = true;
        config.hasBackdrop = true;

        if (errorResponse.status === 400) {
          const errors = new Array<string>();

          for (const error in errorResponse.error) {
            if (errorResponse.error.hasOwnProperty(error)) {
              errors.push(errorResponse.error[error]);
            }
          }
          this.errorService.pushErrors(errors);
          let errores = '<ul> ';
          for (const nombre of Object.keys(errorResponse.error.errors)) {
            for (const er of errorResponse.error.errors[nombre]) {
                errores += '<li>' + er + '</li> ';
            }
          }
          errores += '</ul>';

          config.data = new AlertDialogData('ERROR!', errores, 'primary');
          this.dialog.open(AlertDialogCommonComponent, config);
        }

        if (errorResponse.status >= 500 && errorResponse.status <= 599) {
          config.data = new AlertDialogData('ERROR!', 'Ocurrió un error al realizar la operación', 'primary');
          this.dialog.open(AlertDialogCommonComponent, config);
        }

        if (errorResponse.status === 0) {
          config.data = new AlertDialogData('ERROR!', 'Ocurrió un error desconocido en el servidor', 'primary');
          this.dialog.open(AlertDialogCommonComponent, config);
        }
        return throwError(errorResponse);
      }));

  }

}

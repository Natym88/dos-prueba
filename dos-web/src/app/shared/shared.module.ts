import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { TextAreaDialogComponent } from './components/dialogs/text-area-dialog/text-area-dialog.component';
import { AlertDialogCommonComponent } from './components/dialogs/alert-dialog-common/alert-dialog-common.component';
import { UserIsInRoleDirective } from './directives/user-is-in-role.directive';
import {RoleService} from './services/role.service';
import { FileSizePipe } from './pipes/file-size.pipe';


@NgModule({
  declarations: [AlertDialogCommonComponent, ConfirmDialogComponent, 
    TextAreaDialogComponent, UserIsInRoleDirective, FileSizePipe ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RoleService
  ],
  exports: [
    AlertDialogCommonComponent,
    ConfirmDialogComponent,
    TextAreaDialogComponent,
    UserIsInRoleDirective,
    FileSizePipe

  ],
  entryComponents: [
    AlertDialogCommonComponent,
    ConfirmDialogComponent,
    TextAreaDialogComponent
  ],
})
export class SharedModule {
}

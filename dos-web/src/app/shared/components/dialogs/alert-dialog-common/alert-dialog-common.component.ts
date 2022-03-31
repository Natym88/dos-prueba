import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, ThemePalette} from '@angular/material';


@Component({
  selector: 'app-alert-dialog-common',
  templateUrl: './alert-dialog-common.component.html',
  styleUrls: ['./alert-dialog-common.component.css']
})
export class AlertDialogCommonComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertDialogCommonComponent>, @Inject(MAT_DIALOG_DATA) public data: IAlertDialogData) {
  }

  ngOnInit() {
  }

  onClick(): void {
    this.dialogRef.close();
  }
}

export interface IAlertDialogData {
  title: string;
  text: string;
  actionColor: ThemePalette;
}

export class AlertDialogData implements IAlertDialogData {
  constructor(title: string, text: string, actionColor: ThemePalette) {
    this.title = title;
    this.text = text;
    if (actionColor === null || actionColor === undefined || actionColor.trim() === '') {
      this.actionColor = 'primary';
    } else {
      this.actionColor = actionColor;
    }
  }

  title: string;
  text: string;
  actionColor: ThemePalette;
}

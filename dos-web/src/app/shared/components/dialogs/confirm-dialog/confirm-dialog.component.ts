import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IConfirmDialogData) {
  }

  ngOnInit() {
  }
}

export interface IConfirmDialogData {
  text: string;
  title: string;
  actionColor: ThemePalette;
}

export class ConfirmDialogData implements IConfirmDialogData {

  constructor(title: string, text: string, actionColor: ThemePalette) {
    this.title = title;
    this.text = text;
    if (actionColor === null || actionColor === undefined || actionColor.trim() === '') {
      this.actionColor = 'primary';
    } else {
      this.actionColor = actionColor;
    }
  }


  text: string;
  title: string;
  actionColor: ThemePalette;
}

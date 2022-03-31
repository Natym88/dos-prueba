
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';


@Component({
  selector: 'app-text-area-dialog',
  templateUrl: './text-area-dialog.component.html',
  styleUrls: ['./text-area-dialog.component.sass']
})
export class TextAreaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TextAreaDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ITextAreaDialogData) {
  }

  ngOnInit() {
  }

}

export interface ITextAreaDialogData {
  text: string;
  title: string;
  actionColor: ThemePalette;
  comment: string;
  confirmText: string;
  cancelText: string;
}

export class TextAreaDialogData implements ITextAreaDialogData {

  constructor(title: string, text: string, confirmText: string, cancelText: string, actionColor: ThemePalette) {
    this.title = title;
    this.text = text;
    this.confirmText = confirmText;
    this.cancelText = cancelText;
    if (actionColor === null || actionColor === undefined || actionColor.trim() === '') {
      this.actionColor = 'primary';
    } else {
      this.actionColor = actionColor;
    }
  }

  text: string;
  title: string;
  actionColor: ThemePalette;
  comment: string;
  confirmText: string;
  cancelText: string;
}

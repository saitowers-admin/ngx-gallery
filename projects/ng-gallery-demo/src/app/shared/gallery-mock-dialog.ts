import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gallery-mock-dialog',
  template: `
    <mat-dialog-content>
      <div fxLayout fxLayoutAlign="center center" class="{{data.className}}">
        <mat-icon>{{data.icon}}</mat-icon>
        <span>{{data.text}}</span>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="dialogRef.close()"><b>OK</b></button>
    </mat-dialog-actions>
  `,
  styles: [`
    div {
      font-size: 20px;
    }
    mat-icon {
      width: 60px;
      height: 60px;
      font-size: 60px;
      margin: 10px;
    }
  `]
})
export class GalleryMockDialog {
  constructor(public dialogRef: MatDialogRef<GalleryMockDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}

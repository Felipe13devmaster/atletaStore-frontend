import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogLoginData } from '../../models/models';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogLoginComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogLoginData,
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  openDialogRegister() {
    const dialogRef = this.dialog.open(DialogRegisterComponent, {
      data: {name: '', animal: ''},
    });
    this.close();
  }
}

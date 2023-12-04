import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogLoginData } from '../../models/models';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss']
})
export class DialogRegisterComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLoginData,
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}

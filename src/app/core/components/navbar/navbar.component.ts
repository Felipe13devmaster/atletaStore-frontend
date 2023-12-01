import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  inputSearchIsFocused = false;

  constructor(public dialog: MatDialog) {}

  inputSearchOnFocus(): void {
    this.inputSearchIsFocused = true;
  }

  inputSearchOnBlur(): void {
    setTimeout(() => {
      this.inputSearchIsFocused = false;
    }, 100);
  }

  inputSearchClearValue() {
    this.inputSearch.nativeElement.value = '';
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      data: {name: '', animal: ''},
    });
  }
}

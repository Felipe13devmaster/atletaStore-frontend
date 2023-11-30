import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  inputSearchIsFocused = false;

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
}

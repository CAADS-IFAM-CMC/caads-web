import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {

  isMenuVisible = true;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}

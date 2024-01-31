import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {
  sidebaropen =false;

  sidebarToggle(){
    this.sidebaropen = !this.sidebaropen;
  }
}

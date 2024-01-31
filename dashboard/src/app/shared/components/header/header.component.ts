import { Component, EventEmitter, Output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() togglesideBarforme : EventEmitter<any> = new EventEmitter();

  toggleSideBar(){
    this.togglesideBarforme.emit();
  }

}

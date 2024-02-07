import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isActive:boolean = true;

  toggleSidebar(){
    this.isActive = !this.isActive;
  }
}

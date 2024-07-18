import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false;

  constructor(private Router: Router) { }

  ngOnInit() {
  }
index(){
  this.Router.navigate(['/index']);
}

}

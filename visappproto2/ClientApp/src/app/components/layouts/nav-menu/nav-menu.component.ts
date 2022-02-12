import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  linkMenus: any[] = [
    {id:"home",        title:"home",         link:"/"},
    //{id:"main",        title:"main",         link:"/main"},
    //{id:"sakila",      title:"sakila",       link:"/sakila"},
    {id:"counter",     title:"counter",      link:"/counter"},
    {id:"fetch-data",  title:"fetch-data",   link:"/fetch-data"},
  ];

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

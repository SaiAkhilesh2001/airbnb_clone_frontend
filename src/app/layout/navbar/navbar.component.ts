import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from "primeng/toolbar";
import { MenuModule } from "primeng/menu";
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  location = "Anywhere";
  guests = "Any guests";
  dates = "Any week";

  // login = () => this.authService.login();

  // logout = () => this.authService.logout();

  currentMenuItems : MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
  }

  private fetchMenu(){
    return [
      {
        label: "Sign Up",
        styleClass : "font-bold"
      },
      {
        label: "Log In"
      }
    ]
  }

}

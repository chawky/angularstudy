import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {NgForOf} from "@angular/common";
import {TasksComponent} from "./tasks/tasks.component";

//type UserDetails = {
// id: string,
// name: string,
// avatar: string
//}
interface UserDetails {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, NgForOf, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_course';
  users = DUMMY_USERS;
  selectedUser?: UserDetails;


  handleSelectedUser(user: any) {
    console.log('user selected is  : ' + user.name)
    this.selectedUser = user;
  }
}

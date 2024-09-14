import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {CommonModule, NgForOf} from "@angular/common";
import {CardComponent} from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS);
  @Input({required: true}) user: any;
  //users=input();
  @Output() userSelected = new EventEmitter<any>();
  @Input({required: true}) selected?: boolean;

  //userSelected = output<any>();
  onSelectUser(user: any) {
    this.userSelected.emit(user);
    this.selectedUser = user;
  }
}

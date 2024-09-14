import {Component, EventEmitter, Input, OnChanges, OnInit, Output, output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {taskDetails} from "./taskDetails.model";
import {userDetails} from "../user/userDetails.model";
import {CardComponent} from "../shared/card/card.component";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent  {
  @Input({required:true}) user!:userDetails;
  @Input({required:true}) tasksSent!:taskDetails[];
  @Output() completedTask = new EventEmitter<String>();

  handleCompleteTask(userTask :taskDetails ) {
    this.completedTask.emit(userTask.id);
  }
}

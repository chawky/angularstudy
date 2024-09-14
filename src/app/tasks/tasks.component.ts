import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TaskComponent} from "../task/task.component";
import {taskDetails} from "../task/taskDetails.model";
import {TaskPopupComponent} from "../task-popup/task-popup.component";
import {DUMMY_USERS} from "../dummy-users";
import {userDetails} from "../user/userDetails.model";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, TaskPopupComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) user: any;
  tasks=
  [{
    id: "t1",
    userId: 'u1',
    title: "master angular u1",
    summary: "learn it u1",
    dueDate: '2023-06-01'
  }as taskDetails,
    {
      id: "t2",
      userId: 'u2',
      title: "master spring",
      summary: "learn spring security u1",
      dueDate: '2023-07-01'
    }as taskDetails,
    {
      id: "t3",
      userId: 'u3',
      title: "master spring",
      summary: "learn spring  u2",
      dueDate: '2023-07-01'
    }as taskDetails, {
    id: "t4",
    userId: 'u4',
    title: "master spring",
    summary: "learn spring security u1u",
    dueDate: '2023-07-01'
  }as taskDetails,
    {
      id: "t5",
      userId: 'u5',
      title: "master spring",
      summary: "learn spring security op",
      dueDate: '2023-07-01'
    }as taskDetails,
    {
      id: "t6",
      userId: 'u6',
      title: "master spring",
      summary: "learn spring security broken",
      dueDate: '2023-07-01'
    }as taskDetails,
    {
      id: "t7",
      userId: 'u1',
      title: "master angular u1 user 1",
      summary: "learn it u1 user 1",
      dueDate: '2023-06-01'
    }as taskDetails,

  ] ;
  users=DUMMY_USERS
  get userTasks() :taskDetails[] {
    return  this.tasks.filter((t?: any) => t.userId == this.user?.id) ;
  }
  get selecteduser() :userDetails {
    return  this.user ;
  }
  removeCompletedTask(event: String) {
    this.tasks = this.tasks.filter((f:taskDetails) => f.id !=event )

  }
  isDialogOpen = false; // Control for dialog open/close
  // Get the child dialog component
  @ViewChild(TaskPopupComponent) taskDialogComponent!: TaskPopupComponent;

  openDialog() {
    this.isDialogOpen = true;
     if (this.taskDialogComponent) {
       this.taskDialogComponent.isOpen = true;
     }
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  addNewTask(event: taskDetails) {
    this.tasks.push(event);
  }
}


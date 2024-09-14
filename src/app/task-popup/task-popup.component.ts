import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {userDetails} from "../user/userDetails.model";
import {TasksComponent} from "../tasks/tasks.component";
import {taskDetails} from "../task/taskDetails.model";
import {CardComponent} from "../shared/card/card.component";


@Component({
  selector: 'app-task-popup',
  standalone: true,
  imports: [
    NgIf, FormsModule,
    NgForOf, ReactiveFormsModule, CardComponent
  ],
  templateUrl: './task-popup.component.html',
  styleUrl: './task-popup.component.css'
})
export class TaskPopupComponent implements OnInit,OnChanges{
  @Input() isOpen!:boolean; // Control modal visibility
  taskForm!: FormGroup;
  @Input({required:true}) user!: string;
  @Output() newTaskList = new EventEmitter<taskDetails>();


  constructor(private fb: FormBuilder) {
    console.log(this.user)
    this.taskForm = this.fb.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      summary: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      id: ['', Validators.required],
      userId: [this.user, Validators.required],
      title: ['', Validators.required],
      summary: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.newTaskList.emit(this.taskForm.value)// Handle form submission here
      this.isOpen = false; // Close modal on submit
    }
  }



  onCancel() {
    this.isOpen=false
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user']!=undefined){
      this.taskForm = this.fb.group({
        id: ['', Validators.required],
        userId: [changes['user'].currentValue, Validators.required],
        title: ['', Validators.required],
        summary: ['', Validators.required],
        dueDate: ['', Validators.required]
      });
    }

  }
}

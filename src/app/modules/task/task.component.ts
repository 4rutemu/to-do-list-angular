import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from "../../sevices/task.service";
import {STATUSES} from "../../sevices/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor() {
  }

  newStatus!: any;

  @Input()
  task!: ITask;
  @Input()
  deleteTask!: any;
  // @Input()
  // changeStatus!: any;


  @Output()
  public changedStatus = new EventEmitter();


}

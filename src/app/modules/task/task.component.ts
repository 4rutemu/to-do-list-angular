import { Component, Input } from '@angular/core';
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

  @Input()
  task!: ITask;
}

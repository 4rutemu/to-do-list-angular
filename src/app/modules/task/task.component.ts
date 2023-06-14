import { Component } from '@angular/core';

const STATUSES = {
  COMMON: 'common',
  IMPORTANT: 'important',
  DONE: 'done'
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  status;
}

import { Component } from '@angular/core';
import {TaskService} from "../../sevices/task.service";

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent {
  constructor(public taskService: TaskService) {

  }

  print(value: any){
    console.log(value)
  }
}

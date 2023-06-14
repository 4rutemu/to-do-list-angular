import {Component, EventEmitter, Output} from '@angular/core';





@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  name!: any;
  status!: any;

  @Output()
  public createNewTask = new EventEmitter();

}

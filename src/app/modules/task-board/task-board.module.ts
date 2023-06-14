import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskModule} from "../task/task.module";
import {TaskService} from "../../sevices/task.service";
import {NewTaskModule} from "../new-task/new-task.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskModule,
    NewTaskModule
  ],
  providers: [
    TaskService
  ]
})
export class TaskBoardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskModule} from "../task/task.module";
import {TaskService} from "../../sevices/task.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskModule
  ],
  providers: [
    TaskService
  ]
})
export class TaskBoardModule { }

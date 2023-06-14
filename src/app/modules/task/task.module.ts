import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {NewTaskModule} from "../new-task/new-task.module";



@NgModule({
  declarations: [
    TaskComponent
  ],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }

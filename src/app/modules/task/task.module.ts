import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import {NewTaskModule} from "../new-task/new-task.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TaskComponent
  ],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TaskModule { }

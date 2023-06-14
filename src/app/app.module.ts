import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskModule} from "./modules/task/task.module";
import { TaskBoardComponent } from './modules/task-board/task-board.component';
import { NewTaskComponent } from './modules/new-task/new-task.component';
import {FormsModule} from "@angular/forms";
import {FilterModule} from "./modules/filter/filter.module";

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    NewTaskComponent
  ],
    imports: [
        BrowserModule,
        TaskModule,
        FormsModule,
        FilterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

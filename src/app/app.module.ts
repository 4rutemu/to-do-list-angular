import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskModule} from "./modules/task/task.module";
import { TaskBoardComponent } from './modules/task-board/task-board.component';
import { NewTaskComponent } from './modules/new-task/new-task.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    NewTaskComponent
  ],
    imports: [
        BrowserModule,
        TaskModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

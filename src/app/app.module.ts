import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskModule} from "./modules/task/task.module";
import { TaskBoardComponent } from './modules/task-board/task-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent
  ],
    imports: [
        BrowserModule,
        TaskModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

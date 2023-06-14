import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class FilterModule { }

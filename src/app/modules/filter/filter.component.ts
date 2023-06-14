import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filteredName!: any;
  filteredStatus!: any;

  @Output()
  public filterTasks = new EventEmitter();

}

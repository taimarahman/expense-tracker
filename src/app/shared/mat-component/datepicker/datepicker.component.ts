import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  @Input() date: string = '';
  
  constructor(private datePipe: DatePipe) {}

  selectedDate = new FormControl(new Date());

  submitTransaction() {
    const formattedDate = this.datePipe.transform(this.selectedDate.value, 'yyyy-MM-dd');
    console.log(formattedDate);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrl: './mat-select.component.scss'
})
export class MatSelectComponent {
  @Input() selectedValue: string = '';


  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent {
  @Input() icon:string = '';
  @Input() title:string = '';
  @Input() amount:number = 0;
  @Input() percentage:number = 0;
  @Input() hasIncreased: boolean = true;

  ngOnInit(){
  }

}

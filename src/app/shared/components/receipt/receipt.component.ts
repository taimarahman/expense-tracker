import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { error, log } from 'console';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  date: string='';
  input: string = '';
  value: string = '';

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.getCategoryList();  
  }

  getCategoryList(){
    this.apiService.getCategories().subscribe(
      response => {
      console.log(response);
      },
      error => {
        console.log(error);
      })
  }
}

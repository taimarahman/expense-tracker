import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { tap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private apiService: ApiService) { }
  
  ngOnInit() {
  }

  userLogin() {
    const formData = new FormData;
    formData.append('username', 'taima')
    formData.append('password', '123')
    const user = {
      username: 'taima',
      password: '123'
    }
    this.apiService.login(user).pipe(tap(
      response => {
        console.log(response);
      }),
      catchError(error => {
        console.log(error);
        throw error;
      })
    ).subscribe();

  }

}

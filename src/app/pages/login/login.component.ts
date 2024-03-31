import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) { }
  
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
        this.router.navigate([`/expenses/${user.username}`]);
      }),
      catchError(error => {
        console.log(error);
        throw error;
      })
    ).subscribe();

  }

}

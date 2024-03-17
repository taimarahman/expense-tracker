import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  { path: 'expenses/:username', pathMatch: 'full', component: ExpensesComponent},
  { path: 'user-profile/:username', pathMatch: 'full', component: UserProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

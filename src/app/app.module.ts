import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL IMPORTS
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
// COMPONENT
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SummaryCardComponent } from './shared/components/summary-card/summary-card.component';
import { ReceiptComponent } from './shared/components/receipt/receipt.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { DatepickerComponent } from './shared/mat-component/datepicker/datepicker.component';
import { DatePipe } from '@angular/common';
import { InputFieldComponent } from './shared/mat-component/input-field/input-field.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavbarComponent,
    LoginComponent,
    UserProfileComponent,
    SummaryCardComponent,
    ReceiptComponent,
    ExpensesComponent,
    DatepickerComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

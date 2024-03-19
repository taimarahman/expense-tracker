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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
// COMPONENT
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { MatSelectComponent } from './shared/mat-component/mat-select/mat-select.component';
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
    InputFieldComponent,
    MatSelectComponent
  ],
  imports: [
  // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  // Material Modules
    MatSlideToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

    MatSelectModule,
  ],
  providers: [
    provideClientHydration(),
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

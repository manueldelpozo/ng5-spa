import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AccessPageComponent } from './components/access-page/access-page.component';
import { UserDataService } from './services/user-data.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'access',
    component: AccessPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    RegisterPageComponent,
    AccessPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule, FormsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

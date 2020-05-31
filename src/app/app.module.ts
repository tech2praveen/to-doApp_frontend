import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { ToDoListModule } from './to-do/to-do.module';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SnotifyModule,
    UserModule,
    ToDoListModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      { path: '*', component: LoginComponent},
      { path: '**', component: LoginComponent},
      {path:'login',component: LoginComponent},
      {path:'signup',loadChildren:'./user/user.module'},
      {path:'passwordReset/:resetToken',loadChildren:'./user/user.module'},
      {path: 'to-do',loadChildren:'./to-do/to-do.module', pathMatch: 'full'}   
    ])
  ],
  providers: [ { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

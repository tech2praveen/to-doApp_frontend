import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { ListServiceService } from '../list-service.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { OrderModule } from 'ngx-order-pipe';
import {RouterModule,Routes} from '@angular/router';

import {NgSelectizeModule} from 'ng-selectize';

import { FilterPipe } from './filter.pipe';



@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    OrderModule,
    NgbModalModule.forRoot(),
    HttpClientModule,
    NgSelectizeModule,
    RouterModule.forRoot([
      { path: 'to-do', component: TodoListComponent , pathMatch: 'full'},
    ])
  ],
  declarations: [TodoListComponent,FilterPipe]
})
export class ToDoListModule { }

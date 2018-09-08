import * as angular from 'angular';
import { TodoListComponent } from './todo-list/todo.list.component';
import { TodosComponent } from './todos.component';
import { TodoItemComponent } from './todo-list/todo-item/todo.item.component';
import { DataService } from '../../service/data.service';
import { TodoFilterComponent } from './todo-filter/todo.filter.component';
import { TodoAddComponent } from './todo-add/todo.add.component';
import { TodoRemainingComponent } from './todo-remaining/todo-remaining.component';
import { TodoArchiveComponent } from './todo-archive/todo.archive.component';



export const TodosModule = angular
    .module('todos.components', [])
    .component('todos', TodosComponent )
    .component('todoList', TodoListComponent )
    .component('todoItem', TodoItemComponent)
    .component('todoFilter', TodoFilterComponent)
    .component('todoAdd', TodoAddComponent)
    .component('todoRemaining', TodoRemainingComponent)
    .component('todoArchive', TodoArchiveComponent)
    .service('DataService', DataService)
    .name;

import * as angular from 'angular';
import { TodosModule } from './todos/todos.module';

export const ComponentModule = angular
    .module('app.components', [
      TodosModule
    ])
    .name;

    
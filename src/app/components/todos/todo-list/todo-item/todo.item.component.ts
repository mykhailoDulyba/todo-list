import { TodoItemController } from './todo.item.controller';

export const TodoItemComponent = {
  bindings: {
    todo: '<',
    index:'<'
   },
  template: require('./todo.item.component.html'),
  controller: TodoItemController
};

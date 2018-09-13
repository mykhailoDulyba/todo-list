import { TodoAddController } from './todo.add.controller';

export const TodoAddComponent = {
  bindings: {
    onAdd: '&'
  },  
  template: require('./todo.add.component.html'),
  controller: TodoAddController
};

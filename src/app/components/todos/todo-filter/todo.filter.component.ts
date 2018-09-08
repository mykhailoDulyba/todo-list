export const TodoFilterComponent = {
  bindings :{
    onFilter:'&'
  },
  template: require('./todo.filter.component.html'),
  controller: class TodoFilterController {}
}

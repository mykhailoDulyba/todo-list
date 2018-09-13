import { DataService } from '../../../../service/data.service';

export  class TodoItemController {
  public static $inject = ['DataService'];
  constructor(private dataService: DataService) {}
  public delete(id) {
    this.dataService.removeTodo(id);    
  }
}

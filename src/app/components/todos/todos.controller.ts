import { DataService } from "../../service/data.service";

export class TodosController {
  public static $inject = ["DataService"];   
  public constructor(public dataService: DataService) {}
  public filterValue  
  public tasks

  public getTodos(){
    this.tasks = this.dataService.getTasks();
    return this.dataService.getTasks()
  }

  public onAdd(addVal) {
    const task = {
      title: addVal,
      done: false
    };        
    this.dataService.addTodo(task);       
  } 
  public onFilter(search) {        
    this.filterValue = search;        
  }      
  public onRemaining() {
    return this.dataService.remaining();
  }
}


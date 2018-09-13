/**
 * Service for communication with backend
 * In order to use it you have to:
 * 1. Inject it in the constructor
 * 2. Do itit inside of your service like private dataSourceInst: DataManipulationMethods;
 *        this.dataSourceInst = this.dataManipulationService
            .init('https://api.github.com/gists')
            .rows()
            .then(data => {
                debugger;
            });
 */ 
export class DataService {    
    

    public tasks = [{
      title: 'task-1',
      done: true
    },
    {
      title: 'do',
      done: true
    },
    {
      title: 'eat some',
      done: true
    },
    {
      title: 'task do 4',
      done: false
    }];
  
  public getTasks() {     
    return this.tasks;
  }
  public removeTodo(index) {
    this.tasks = this.tasks.filter((todo, i) => i !== index);    
  }
  public addTodo(todo) {
    this.tasks = [...this.tasks, todo];     
  }
  public remaining() {
    return this.tasks.filter(item => !item.done).length;
  }
  public archiveTodos() {
    this.tasks = this.tasks.filter(todo => !todo.done);
  }
}

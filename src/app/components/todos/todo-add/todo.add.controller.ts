export class TodoAddController {
  public newTask;
  public onAdd;
  public addTodo() {
    this.onAdd({
      $event: this.newTask
    });  
 }
}

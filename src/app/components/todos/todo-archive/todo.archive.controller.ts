import { DataService } from '../../../service/data.service';

export class TodoArchiveController {
  public static $inject = ['DataService'];
  constructor(private todoService: DataService) {}
   public onArchive() {
     this.todoService.archiveTodos();
   }
}

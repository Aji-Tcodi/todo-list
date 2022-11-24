import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { TodosService } from './services/todos.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Observable<Todo[]> = this.todosService.todos$;

  constructor(private todosService: TodosService) {}

  newTodo(todo: string) {
    this.todosService.saveTodo(todo);
  }

  completedItem(todoId: string, completed: boolean) {
    this.todosService.setCompleted(todoId, completed);
  }
  deleteItem(todoId: string) {
    this.todosService.deleteTodo(todoId);
  }
}

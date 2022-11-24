import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { generateId } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([
    { id: 'ewrewrwer333', todo: 'Hello World!', completed: false },
  ]);
  todos$: Observable<Todo[]> = this.todos.asObservable();

  constructor() {}

  saveTodo(todo: string) {
    const id = generateId();
    this.todos.next([{ id, todo, completed: false }, ...this.todos.value]);
  }

  setCompleted(todoId: string, completed: boolean) {
    const todos = this.todos.value.map((todo) => {
      if (todo.id !== todoId) return todo;

      return { ...todo, completed };
    });

    this.todos.next([...todos]);
  }

  deleteTodo(todoId: string) {
    this.todos.next([...this.todos.value.filter((todo) => todo.id !== todoId)]);
  }
}

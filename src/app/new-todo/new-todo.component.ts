import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  @Output() onNewTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  saveTodo(value: string, input: HTMLInputElement) {
    if (!value) return;

    this.onNewTodo.emit(value);
    input.value = '';
  }
}

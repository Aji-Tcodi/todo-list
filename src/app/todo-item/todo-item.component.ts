import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onCompleted: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem() {
    this.onDeleteItem.emit();
  }

  completed(completed: boolean) {
    this.onCompleted.emit(completed);
  }
}

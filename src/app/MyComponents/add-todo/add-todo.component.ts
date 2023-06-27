import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Input() Count: number;
  title: string;
  desc: string;
  @Output() AddTodo: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    console.log(this.Count);
    const todo = {
      sno: this.Count + 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    this.AddTodo.emit(todo);
    this.title = ""
    this.desc = ""
  }
}

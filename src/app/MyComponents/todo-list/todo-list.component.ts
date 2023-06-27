import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  localitem: string | null;
  Count: number;
  Done: number;
  todos: Todo[];
  constructor() {
    this.localitem = localStorage.getItem('todos');
    console.log(this.localitem)
    this.Done = 0;
    if (this.localitem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem);
    }
    this.Count = this.todos.length;
  }
  Delete(i:number) {
    this.todos.splice(i, 1);
    this.Count = this.Count - 1;
    const todos = this.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  AddTodo(todo: Todo) {
    this.todos.push(todo);
    this.Count = this.todos.length;
    const todos = this.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  onDone(i:number) {
     (this.todos[i].active = !this.todos[i].active)
    this.Count = this.Count - 1;
    this.Done = this.Done + 1;
    const todos = this.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

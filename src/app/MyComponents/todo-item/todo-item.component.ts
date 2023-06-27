import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo :Todo;
  @Input() index :number;
  @Input() Count :number;
  @Output() TodoDelete: EventEmitter<number> = new EventEmitter();
  @Output() TodoDone: EventEmitter<number> = new EventEmitter();
  constructor(){
  }
  onDelete(i:number){
    this.TodoDelete.emit(i)
  }
onDone(i:number){
this.TodoDone.emit(i)
}

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})


export class AddTodoComponent {
  title: string;
  desc: string;
  // event emitter
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();



  onSubmit(){
    var count = Math.floor(Math.random() * 100);
    const todo = {
      sno: count,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);

  }
  constructor(){

  }
  ngOnInit(): void{

  }

}

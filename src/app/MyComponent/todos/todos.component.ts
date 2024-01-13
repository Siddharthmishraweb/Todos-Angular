import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  localItem: string;
  newTodo: Todo[];
  todos: Todo[];
  

  // @Input() addTodo: EventEmitter<Todo>  = new EventEmitter();

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter((item)=>
      todo.sno !== item.sno
    );
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // console.log(todo);
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);

  }
  todoAdd(todo:Todo){
    console.log("todo:: ", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // console.log(todo);
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);

  }

  markDone(todo: Todo){
    // this.newTodo = this.todos.filter((item)=> item.sno === todo.sno);
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);
    // this.newTodo[0].active = false;
    // this.todos.push(this.newTodo[0]);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
  // addTodo(todo: Todo){

  // }
 // app reinitialize
  constructor(){
    this.localItem = localStorage.getItem("todos") || "";
    if(this.localItem === ""){
      this.todos = [];
    }else{
       this.todos = JSON.parse(this.localItem) || [];
    }
    

  }

  ngOnInit(): void {
      
  }
}

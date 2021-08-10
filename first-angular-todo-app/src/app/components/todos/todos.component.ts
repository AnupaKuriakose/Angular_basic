import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = []; 
    inputTodo: string ="";

  constructor() { }

  ngOnInit(): void {

    // this.todos = [
    //   {
    //     content : "First todo",
    //     completed : false
    //   },
    //   {
    //     content : "second todo",
    //     completed : true
    //   },
    //   {
    //     content : "third todo",
    //     completed : false
    //   }
    // ]
   
  }
//toggle done ...thet is when user click on any of the item it should mark as done 
//so need to line -through those
  toggleDone(id: number) {
    //here array.map -> calls the callback function on each element in the array 
    //and returns an array with results
      this.todos.map((v, i)=>{
        if(i === id) v.completed = !v.completed;
        return v;
      })
  }
//delete the selected todo when click on button 
  deleteTodo(id: number)
  {
    //filter array.filter - returns the elemets of the array taht meets the condition specified in the 
    //callback func 
    this.todos = this.todos.filter((v,i)=> i != id);

  }
//add new todo and display 
  addTodo()
  {
    //push the input todo to the array
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    //clear the input field
    this.inputTodo = "";
  }

}

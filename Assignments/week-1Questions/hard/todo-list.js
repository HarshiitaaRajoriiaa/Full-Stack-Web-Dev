/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
      this.todos = [];
    }
    add(todo){
      this.todos.push(todo);
    }
    remove(indexofTodo){
      this.todos[indexofTodo] = -1;
    }
    getAll(){
      todos.forEach(todo => {
        console.log(todo);
      });
    }
    get(indexofTodo){
      return this.todos[indexofTodo];
    }
    update(indexofTodo, updatedTodo){
      this.todos[indexofTodo] = updatedTodo;
    }
    clear(){
      this.todos = [];
    }
    

}

module.exports = Todo;

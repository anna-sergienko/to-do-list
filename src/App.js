import { Component } from 'react';
import TodoList from './components/TodoList';
import initialTodo from './components/TodoList/todos.json';


class App extends Component{

  state = {
    todos: initialTodo,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      }),
    }));
}

  render() {
    const { todos } = this.state;

    // const totalTodoCount = todos.length;
    const completedTodos = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,);
    // console.log(completedTodos);

    return (
      <>
        <div>
          <p>Total: { todos.length}</p>
          <p>Marked as done: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </>
    );
  }
}

export default App;






// const App = () => (
//   <>
//     <TodoList />
//   </>
// );
  

// export default App;
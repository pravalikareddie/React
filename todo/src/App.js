import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import axios from 'axios';
import uuid from 'uuid';
class App extends React.Component {
  state = {
    todos: [
     
    ],
  };
  componentDidMount=()=>{
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res=>this.setState({todos:res.data}))
  }
  onSubmit = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo onSubmit={this.onSubmit}></AddTodo>
                <Todos
                  todos={this.state.todos}
                  checkComplete={this.checkComplete}
                  deleteTodo={this.deleteTodo}
                ></Todos>
              </React.Fragment>
            )}
          ></Route>
          <Route path="/about" component={About}/>
          
        </div>
      </BrowserRouter>
    );
  }
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
    
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id != id)],
      });
    })
    
  };

  checkComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }),
    });
    console.log("djfkdsj");
  };
}

export default App;

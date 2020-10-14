import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} checkComplete={this.props.checkComplete} deleteTodo={this.props.deleteTodo}></TodoItem>
        ))}
      </div>
    );
  }
 
}

Todos.propTypes = {
  todos: (PropTypes.array.isRequired ),
};

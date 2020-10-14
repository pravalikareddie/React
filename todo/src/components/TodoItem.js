import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div style={this.getItemStyle()}>
        <input type="checkbox" onChange={this.props.checkComplete.bind(this,this.props.todo.id)}></input>{" "}
        {""}
        {this.props.todo.title}
        <button style={{backgroundColor:'red',color:'white',float:'right',border:'none'}}
         onClick={this.props.deleteTodo.bind(this,this.props.todo.id)}>X</button>
      </div>
    );
  }
 
  getItemStyle =() => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "1rem 0",
      margin: "1rem 0",
      textDecoration: this.props.todo.isCompleted ? "line-through" : "",
    };
  };
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoItem;

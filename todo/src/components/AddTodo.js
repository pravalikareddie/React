import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }

    changeTitle=(e)=>{
        this.setState({title:e.target.value})
        
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({title:''})

    }
    render() {
        return (
            <div>
                <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Enter an item" value={this.state.title} onChange={this.changeTitle} style={this.inputStyle}/>
                    <input type="submit" style={this.btn} />
                </form>
            </div>
        )
    }
    btn={
        flex:1,
        padding:'1rem',
    }
    inputStyle={
        flex:10
    }
}

export default AddTodo

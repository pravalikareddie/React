import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    }
    updateSearch=(e)=>{
        this.setState({text:e.target.value})
    }
    searchUsers=(e)=>{
        e.preventDefault()
        if(this.state.text==''){
            this.props.setAlert('Please enter something','light')
        }
        else{   
            console.log(this.state)
            this.props.searchUsers(this.state.text)
            this.setState({text:''})

        }
     
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.searchUsers}>
                    <input type="text" placeholder="Enter search item" onChange={this.updateSearch} value={this.state.text}/>
                    <input type="submit" className="btn btn-dark btn-block"/>

                </form>
                {
                    this.props.showClear &&   <button className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button>
                }
              
            </div>
        )
    }
}

export default Search

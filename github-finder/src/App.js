import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";
import {  Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import User from "./components/User";

class App extends React.Component {
  state = {
    isLoading: false,
    users: [],
    alert: null,
    user:{},
    repos:[]
  };

  searchUsers = (text) => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          users: res.data.items,
        });
      });
  };
  clearUsers = () => {
    this.setState({
      isLoading: false,
      users: [],
      alert: null,
    });
  };
  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };
  getUser=(username)=>{
    this.setState({ isLoading: true });
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          user: res.data,
        });
      });
  }
  getRepos=(username)=>{
    this.setState({ isLoading: true });
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          isLoading: false,
          repos: res.data,
        });
      });

  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar title="Github Finder" icon="fab fa-github"></Navbar>

          <div className="container">
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                    ></Search>
                    <Users
                      isLoading={this.state.isLoading}
                      users={this.state.users}
                    ></Users>
                  </Fragment>
                )}
              ></Route>
              <Route path="/about" component={About}></Route>
              <Route exact path="/user/:login" render={props=>(
                <User {...props} getRepos={this.getRepos} repos={this.state.repos} getUser={this.getUser} user={this.state.user} isLoading={this.state.isLoading}></User>
              )}></Route>

            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

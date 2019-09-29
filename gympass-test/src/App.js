import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import HeaderComponent from './components/Header/Header';
import Form from './components/Form/Form';
import ReposList from './components/ReposList/ReposList';


class App extends Component {
  state = {
  user: "",
  repos: [],
  error: "",
  loading: false,
  }

  changeUser = user => {
  this.setState({user})
  }

  searchUser = async () => {
  const { user }  = this.state;

  try {
    const {data: repos} = await axios.get(
    `https://api.github.com/users/${user}/repos`
    );
    console.log(repos)

    this.setState({ repos, error: "" })
  } catch (error){
    this.setState({
      error: "Usuário não encontrado!"
    });
  }
  

  }
  

  render(){
  const { user, repos, error, loading } = this.state;
  return (
  <div className="App">
  <HeaderComponent></HeaderComponent>
  <Form 
    changeUser={this.changeUser}
    user={user}
    error={error}
    loading={loading}
    buttonAction={this.searchUser}
    ></Form>
	<ReposList repos={repos}></ReposList>
  </div>
  );
  }
}

export default App;

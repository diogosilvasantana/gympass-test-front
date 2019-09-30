import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import HeaderComponent from './components/Header/Header';
import Form from './components/Form/Form';
import ReposList from './components/ReposList/ReposList';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {

  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
    commit: ""
  }

  changeUser = user => {
    this.setState({ user })
  }

  searchRepos = async () => {
    const { user } = this.state;
    this.setState({ loading: true, error: "" })

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`,
      );

      this.setState({ repos, error: "", loading: false })
    } catch (error) {
      this.setState({
        repos: [],
        error: "Usuário não encontrado!",
        loading: false
      });
    }
  }


  render() {

    const { user, repos, error, loading } = this.state;
    return (
      <div className="App">

        {/* Header da Aplicação */}
        <HeaderComponent />

        {/* Formulário */}
        <Form
          changeUser={this.changeUser}
          changeCommit={this.changeCommit}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchRepos}
        />

        {/* Grid com lista de repositórios */}
        {loading ? <CircularProgress /> :
          <ReposList repos={repos} />}

      </div>
    );
  }
}

export default App;

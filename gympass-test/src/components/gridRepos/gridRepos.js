import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default class GridRepos extends Component {

    repos = {
        name: ""
    }

    getRepos(username) {
        return fetch(`https://api.github.com/users/${username}/repos`)
            .then(repos => repos.json())
            .then(repos => {
                return repos;
            })
    }
    
    async setRepos(e){
        console.log(e)
        e.preventDefault();
        let user = await this.getRepos(this.refs.username.value);
        console.log(user)
        this.repos = user;
    }

  render() {
    return (
      <div className="gridRepos">
<form onSubmit={e => this.setRepos(e)}>
<input ref="username" type="text" placeholder="Usuário GitHub" label="Usuário GitHub"
        className="inputUserGitHub"
      />
</form>


          <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
      </div>
    );
  }
}

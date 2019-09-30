import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import './ReposItem.css'

const RepoItem = ({ repo }) => (
  <a href={`https://github.com/${repo.full_name}/commits/master`} target='_blank'
     rel="noopener noreferrer"
    className="repoItemContainer">
    <Card className="card">
      <CardContent>
        <div><Icon className="cardIcon">folder</Icon></div>
        <span className="titleRepos">{repo.name}</span>
        <Typography color="textSecondary" fontStyle="bold" gutterBottom>
          
        </Typography>
        <span class="textContent">Clique para ver os commits</span>
      </CardContent>
    </Card>
  </a>
);

export default RepoItem;


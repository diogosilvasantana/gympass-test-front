import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import './ReposItem.css'


const RepoItem = ({ repo }) => (

  <a 
    href={repo.html_url}
    className="repoItemContainer"
    target="_blank">
    <Card className="card">
      <CardHeader>
        Repositório: {repo.name}
      </CardHeader>
      <CardContent>      
      <span>Stars: {repo.stargazers_count}</span>
      <span>Forks: {repo.forks}</span>
      <span>Issues: {repo.open_issues}</span>
      </CardContent>
    </Card>
  </a>
);

export default RepoItem;


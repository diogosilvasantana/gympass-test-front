import React from 'react';

import RepoItem from './RepoItem/RepoItem';

const ReposList = ({ repos }) => (
  <div className="reposListContainer">
    {repos.map(repo => (
        <RepoItem repo={repo}></RepoItem>
      ))}
  </div>
);

export default ReposList;
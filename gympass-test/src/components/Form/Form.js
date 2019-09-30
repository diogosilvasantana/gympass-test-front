import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './Form.css';

// Customizar cor do botão
const ColorButton = withStyles(theme => ({
  root: {
    height: 55,
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: deepOrange[700],
    },
  },
}))(Button);

// Criar o Formulário
const Form = ({ user, error, buttonAction, changeUser }) => (

  <div className="formContainer">

    <TextField
      id="outlined-name"
      label="Usuário GitHub"
      className="userInput"
      value={user}
      onChange={e => changeUser(e.target.value)}
      margin="normal"
      variant="outlined"
    />

    <ColorButton className="searchButton" onClick={buttonAction}>
      <Icon>search</Icon> Listar Repositórios
  </ColorButton >

    <p className="errorText">{error}</p>
  </div>
);

export default Form;


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimarySearchAppBar from './PrimarySearchAppBar';
//import SearchAppBar from './SearchAppBar';
import TemporaryDrawer from './TemporaryDrawer.js';
import * as serviceWorker from './serviceWorker';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

// ReactDOM.render(<App />, document.getElementById('root'));


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <PrimarySearchAppBar />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

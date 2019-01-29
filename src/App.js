import React from 'react';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PrimarySearchAppBar from './components/header/Header';
import DashboardAPI from './components/dashboard/DashboardAPI';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { BrowserRouter as Router, Route} from "react-router-dom";

// material-ui main theme
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
    <Router>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <PrimarySearchAppBar />
            <React.Fragment>
                <Route exact path="/" component={DashboardAPI} />
            </React.Fragment>
        </React.Fragment>
      </MuiThemeProvider>
    </Router>
  );
}


export default App;

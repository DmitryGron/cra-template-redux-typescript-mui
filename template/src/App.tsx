import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {
  createMuiTheme,
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  StyleRules
} from "@material-ui/core/styles";
import { Button, ThemeProvider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#fff"
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        "&:hover": {
          backgroundColor: blue[700]
        }
      }
    }
  }
});

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
      height: "100vh"
    },
    app: {
      textAlign: "center"
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
      "@media (prefers-reduced-motion: no-preference) ": {
        animation: "App-logo-float infinite 3s ease-in-out"
      }
    },
    appHeader: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)"
    },
    appLink: {
      color: "rgb(112, 76, 182)";
    }
  });

  type AppProps = {} & WithStyles<typeof styles>;

const App = ({classes}: AppProps) => (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={classes.appLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={classes.appLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={classes.appLink}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={classes.appLink}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );

  export default withStyles(styles)(App);

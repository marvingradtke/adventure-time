import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/defaultTheme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/new">
            <div>New</div>
          </Route>
          <Route path="/">
            <div>Adventure Time</div>
          </Route>
        </Switch>
        <div>
          <Link to="/">Home</Link>
          <Link to="/new">New</Link>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

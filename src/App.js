import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import defaultTheme from "./themes/defaultTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Title from "./components/Title";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Header = styled.header`
  height: 80px;
  background: ${props => props.theme.colors.secondary};
`;

const Footer = styled.footer`
  height: 80px;
  background: ${props => props.theme.colors.secondary};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Header>
            <Title>Adventure Time</Title>
          </Header>
          <Main>
            <Switch>
              <Route path="/Character">
                <div>Character</div>
              </Route>
              <Route path="/">
                <div>Time</div>
              </Route>
            </Switch>
          </Main>
          <Footer>
            <BottomNavigation />
          </Footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

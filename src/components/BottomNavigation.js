import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const NavigationLink = styled(({ active, ...rest }) => <Link {...rest} />)`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  height: 100%;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
`;

function BottomNavigation() {
  const location = useLocation();

  return (
    <Container>
      <NavigationLink to="/" active={location.pathname === "/"}>
        Home
      </NavigationLink>
      <NavigationLink
        to="/character"
        active={location.pathname === "/character"}
      >
        Character
      </NavigationLink>
    </Container>
  );
}

export default BottomNavigation;

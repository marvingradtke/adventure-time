import React from "react";
import styled from "@emotion/styled";

const H1 = styled.h1`
  margin: 10px;
  font-size: 3rem;
  text-align: center;
`;

function Title({ children }) {
  return <H1>{children}</H1>;
}

export default Title;

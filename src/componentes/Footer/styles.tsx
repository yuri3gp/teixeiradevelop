import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  text-align: center;
  padding: 22px 6vw 26px;
  margin-top: 56px;
  background: #040a17;
  border-top: 1px solid rgba(127, 207, 255, 0.2);
  color: #d8e8ff;

  p {
    margin: 0 0 8px;
  }

  small {
    color: #8eb2dd;
  }
`;

export const StyledLink = styled.a`
  color: #8df8ea;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledRouterLink = styled(Link)`
  color: #8df8ea;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
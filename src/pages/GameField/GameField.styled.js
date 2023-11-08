import { StyledLink } from 'pages/MainMenu/MainMenu.styled';
import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 462px;
  border: 1px solid black;
`;

export const StyledFieldDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  width: 150px;
  height: 150px;
  border: 2px solid black;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgb(202, 202, 202);
  }
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
`;

export const StyledLinkPlayAgain = styled(StyledLink)`
  font-size: 30px;
  padding: 10px 20px;
`;

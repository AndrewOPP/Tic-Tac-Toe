import { StyledLink } from 'pages/MainMenu/MainMenu.styled';
import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyleTitle = styled.h2`
  font-size: 60px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`;

export const StyleBotButton = styled.button`
  border: 2px solid black;
  border-color: ${props => (props.active ? 'red' : 'black')};
  color: ${props => (props.active ? 'red' : 'black')};
  padding: 10px 55px;
  font-size: 23px;
  border-radius: 15px;
  cursor: pointer;
  background-color: white;
  transition: all 300ms;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledStartButton = styled.button`
  border: 2px solid black;
  padding: 10px 55px;
  font-size: 23px;
  border-radius: 15px;
  cursor: pointer;
  background-color: white;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyleFigureButton = styled.button`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid black;
  border-color: ${props => (props.active ? 'red' : 'black')};
  color: ${props => (props.active ? 'red' : 'black')};
  padding: 40px 60px;
  font-size: 70px;
  border-radius: 15px;
  cursor: pointer;
  background-color: white;
  transition: all 300ms;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

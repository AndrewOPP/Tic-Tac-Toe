import GameOption from 'pages/GameOption/GameOption';
import Options from 'pages/Options/Options';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  StyledDiv,
  StyledLink,
  StyledMainDiv,
  StyledTitle,
} from './MainMenu.styled';
import GameField from 'pages/GameField/GameField';

export default function MainMenu() {
  const [linksVisible, setLinksVisible] = useState(true);
  const [playerFigure, setPlayerFigure] = useState('X');
  const [botsFigure, setbotsFigure] = useState('O');
  const [botDiff, setbotDiff] = useState('Easy');

  useEffect(() => {
    const linksVisibleIs = localStorage.getItem('linksVisible');
    if (linksVisibleIs !== null) setLinksVisible(JSON.parse(linksVisibleIs));
  }, []);

  const changeBotDiff = value => {
    setbotDiff(value);
  };

  const changePlayerFigure = figure => {
    if (figure === 'X') {
      setPlayerFigure('X');
      setbotsFigure('O');

      return;
    }
    setbotsFigure('X');
    setPlayerFigure('O');
  };

  const handlerClick = () => {
    localStorage.setItem('linksVisible', JSON.stringify(!linksVisible));
    setLinksVisible(!linksVisible);
  };

  return (
    <StyledMainDiv>
      {linksVisible && (
        <StyledDiv>
          <StyledTitle>Tic Tac Toe</StyledTitle>
          <StyledLink to="/gameOption" onClick={handlerClick}>
            Start game
          </StyledLink>
          <StyledLink to="/options" onClick={handlerClick}>
            Options
          </StyledLink>
        </StyledDiv>
      )}
      <Routes>
        <Route
          path="/gameOption"
          element={
            <GameOption
              playerFigure={playerFigure}
              changeBotDiff={changeBotDiff}
              botDiff={botDiff}
              onChangeFigure={changePlayerFigure}
              mainMenuSet={handlerClick}
            />
          }
        />
        <Route
          path="/options"
          element={<Options mainMenuSet={handlerClick} />}
        />
        <Route
          path="/gameField"
          element={
            <GameField
              botsFigure={botsFigure}
              playerFigure={playerFigure}
              mainMenuSet={handlerClick}
            />
          }
        />
      </Routes>
    </StyledMainDiv>
  );
}

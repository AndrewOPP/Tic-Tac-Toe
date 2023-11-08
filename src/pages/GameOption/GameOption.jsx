import React from 'react';
import { StyledMainDiv } from './GameOption.styled';
import FigureSelect from 'components/FigureSelect';
import BotDiffSelect from 'components/BotDiffSelect';
import { StyledLink } from 'pages/MainMenu/MainMenu.styled';
import { StyledLinkPlayAgain } from 'pages/GameField/GameField.styled';

export default function GameOption({
  mainMenuSet,
  onChangeFigure,
  botDiff,
  changeBotDiff,
  playerFigure,
}) {
  return (
    <StyledMainDiv>
      <StyledLinkPlayAgain
        onClick={() => {
          mainMenuSet();
        }}
        to={'/'}
        type="button"
      >
        Go back
      </StyledLinkPlayAgain>
      <FigureSelect
        playerFigure={playerFigure}
        onChangeFigure={onChangeFigure}
      />
      <BotDiffSelect changeBotDiff={changeBotDiff} botDiff={botDiff} />
      <StyledLink to={'/gameField'} type="button">
        Start Game
      </StyledLink>
    </StyledMainDiv>
  );
}

import {
  StyleFigureButton,
  StyleTitle,
  StyledButtonDiv,
} from 'pages/GameOption/GameOption.styled';
import React from 'react';

export default function FigureSelect({ onChangeFigure, playerFigure }) {
  const changeFigure = figure => {
    onChangeFigure(figure);
  };

  return (
    <div>
      <StyleTitle>Choose Your Figure</StyleTitle>
      <StyledButtonDiv>
        <StyleFigureButton
          active={playerFigure === 'X'}
          onClick={() => changeFigure('X')}
          type="button"
        >
          X
        </StyleFigureButton>
        <StyleFigureButton
          active={playerFigure === 'O'}
          onClick={() => changeFigure('O')}
          type="button"
        >
          O
        </StyleFigureButton>
      </StyledButtonDiv>
    </div>
  );
}

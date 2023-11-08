import {
  StyledLinkPlayAgain,
  StyledTitle,
} from 'pages/GameField/GameField.styled';

import React from 'react';

export default function WinnerModal({ winner }) {
  const myComponentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const playAgainButton = (
    <StyledLinkPlayAgain to={'/gameOption'}>Play again</StyledLinkPlayAgain>
  );

  return (
    <div style={myComponentStyle}>
      {winner === 'noWinner' ? <StyledTitle>No winner!</StyledTitle> : null}
      {winner === 'Player' ? (
        <StyledTitle>Congrats, you have won!</StyledTitle>
      ) : null}
      {winner === 'Bot' ? (
        <StyledTitle>Bot has won. Try again!</StyledTitle>
      ) : null}
      {playAgainButton}
    </div>
  );
}

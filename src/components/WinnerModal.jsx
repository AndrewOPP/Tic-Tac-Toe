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
        <StyledTitle>Congrats, you won!</StyledTitle>
      ) : null}
      {winner === 'Bot' ? <StyledTitle>Bot won. Try again!</StyledTitle> : null}
      {playAgainButton}
    </div>
  );
}

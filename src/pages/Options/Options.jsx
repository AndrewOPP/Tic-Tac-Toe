import { StyledLinkPlayAgain } from 'pages/GameField/GameField.styled';

import React from 'react';

export default function Options({ mainMenuSet }) {
  window.addEventListener('popstate', function () {
    mainMenuSet();
  });

  const customDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  };

  return (
    <div style={customDivStyle}>
      <StyledLinkPlayAgain to={'/'} onClick={() => mainMenuSet()}>
        Go back
      </StyledLinkPlayAgain>
      <span>Music Volume</span>
      <input type="range" />
    </div>
  );
}

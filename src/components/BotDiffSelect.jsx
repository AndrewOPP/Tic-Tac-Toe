import {
  StyleBotButton,
  StyleTitle,
  StyledButtonDiv,
  StyledDiv,
} from 'pages/GameOption/GameOption.styled';
import React from 'react';

export default function BotDiffSelect({ botDiff, changeBotDiff }) {
  return (
    <StyledDiv>
      <StyleTitle>Bot Difficulty</StyleTitle>
      <StyledButtonDiv>
        <StyleBotButton
          onClick={() => changeBotDiff('Easy')}
          active={botDiff === 'Easy'}
          type="button"
        >
          Easy
        </StyleBotButton>
        <StyleBotButton
          active={botDiff === 'Normal'}
          onClick={() => changeBotDiff('Normal')}
          type="button"
        >
          Normal
        </StyleBotButton>
        <StyleBotButton
          active={botDiff === 'Hard'}
          onClick={() => changeBotDiff('Hard')}
          type="button"
        >
          Hard
        </StyleBotButton>
      </StyledButtonDiv>
    </StyledDiv>
  );
}

import React, { useState } from 'react';
import { StyledFieldDiv, StyledMainDiv } from './GameField.styled';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import WinnerModal from 'components/WinnerModal';

export default function GameField({ mainMenuSet, playerFigure, botsFigure }) {
  const platesDivRef = useRef();
  const [playerPlates, setplayerPlates] = useState([]);
  const [botPlates, setbotPlates] = useState([]);
  const [clickValuble, setclickValuble] = useState('true');
  const [winner, setWinner] = useState('');

  const winCheck = (arra, name) => {
    const WINPLATES = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (
      WINPLATES.some(winplate => winplate.every(plate => arra.includes(plate)))
    ) {
      return name;
    }

    const allPlates = [...platesDivRef.current.children];
    if (allPlates.filter(elem => !elem.textContent).length === 0) {
      return 'noWinner';
    }
  };

  const gameRound = evn => {
    const currentPlate = evn.currentTarget;

    if (!clickValuble) return;

    if (!currentPlate.textContent) {
      setclickValuble(false);
      currentPlate.textContent = playerFigure;
    } else return;

    setplayerPlates(prevPlayerPlates => [
      ...prevPlayerPlates,
      Number(currentPlate.id),
    ]);

    if (winCheck([...playerPlates, Number(currentPlate.id)], 'Player')) {
      setTimeout(() => {
        setWinner(
          winCheck([...playerPlates, Number(currentPlate.id)], 'Player')
        );
      }, 1000);
      return;
    }

    setTimeout(() => {
      botTurn();
    }, 1000);
  };

  const botTurn = () => {
    const allPlates = [...platesDivRef.current.children];
    if (allPlates.filter(elem => !elem.textContent).length === 0) {
      return;
    }
    const randomPlate = Math.floor(Math.random() * 8);

    if (!allPlates[randomPlate].textContent) {
      allPlates[randomPlate].textContent = botsFigure;
      setbotPlates(prevbotPlates => [...prevbotPlates, randomPlate]);
      setclickValuble(true);
      if (winCheck([...botPlates, randomPlate], 'Bot')) {
        setclickValuble(false);
        setTimeout(() => {
          setWinner('Bot');
        }, 1000);
        return;
      }
    } else {
      botTurn();
    }
  };

  const renderStyledFieldDivs = () => {
    const divs = [];
    for (let i = 0; i < 9; i++) {
      divs.push(
        <StyledFieldDiv
          key={i}
          id={i.toString()}
          onClick={event => gameRound(event)}
        ></StyledFieldDiv>
      );
    }
    return divs;
  };

  if (winner) {
    return <WinnerModal winner={winner} />;
  }

  return (
    <div>
      <Link to={'/'} onClick={mainMenuSet}>
        {' '}
        End game{' '}
      </Link>
      <StyledMainDiv ref={platesDivRef}>
        {renderStyledFieldDivs()}
      </StyledMainDiv>
    </div>
  );
}

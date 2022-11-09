import React, { useState } from 'react';
import { useEffect } from 'react';
import { PromotionContainer, PromotionText } from '../../styles/promotion';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import { useRef } from 'react';

const message = [
  'First string now!',
  'Second string now!',
  'Third string now!',
  'Fourth string now!',
];

const Promotion = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const refContainer = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const idInterval = setInterval(() => {
      setShow(true);
      setMessageIndex((lastState) => (lastState + 1) % message.length);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  return (
    <PromotionContainer ref={refContainer}>
      <Slide
        container={refContainer.current}
        direction={show ? 'left' : 'right'}
        in={show}
        timeout={{
          enter: 450,
          exit: 250,
        }}
      >
        <PromotionText>{message[messageIndex]}</PromotionText>
      </Slide>
    </PromotionContainer>
  );
};

export default Promotion;

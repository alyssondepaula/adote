import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Container, ButtonDoar, BurronAdotar, TextDoar,TextAdotar } from './styles';

const BoxLogin: React.FC = () => {
  return (
    <Container>
      <ButtonDoar><FontAwesome5 name="hand-holding-heart" size={24} color="white" /><TextDoar>Quero Doar</TextDoar></ButtonDoar>
      <BurronAdotar><FontAwesome name="heart" size={24} color="black" /><TextAdotar>Quero Adotar</TextAdotar></BurronAdotar>
    </Container>
  );
};

export default BoxLogin;

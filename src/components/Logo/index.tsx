import React from 'react';

import { Text } from 'react-native';

import { Container, ImageLogo, TextLogo } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Logo: React.FC = () => {
  return (
    <Container>
      <ImageLogo>
<FontAwesome5 name="dog" size={156} color="white" />
      </ImageLogo>

      <TextLogo>Adote s2</TextLogo>
    </Container>
  );
};

export default Logo;

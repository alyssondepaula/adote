import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: ${ windowWidth * 0.95}px;
  height: ${ windowHeight * 0.35}px;
  padding: 4px;
  align-items: center;
`;

export const ImageLogo = styled.View`
  align-items: center;
`;

export const TextLogo = styled.Text`
  color:  white;
  font-weight: bold;
  font-size: 24px;
`;

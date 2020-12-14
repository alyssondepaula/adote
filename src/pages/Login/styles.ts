import styled from 'styled-components/native';
import dogtwo from '../../../assets/img/dogtwo.png';


import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
 display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6B840;

`;

export const Dog = styled.Image.attrs({
  source: dogtwo,
  resizeMode: 'contain'
})` 
  position: absolute;
  bottom: ${0 - 30}px;
  right: ${0 - 156}px;
  height: 256px;
`;
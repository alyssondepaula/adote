import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: ${ windowWidth * 0.90}px;
  height: ${ windowHeight * 0.20}px;
  border-radius: 50px;
  margin-top: ${ windowHeight * 0.01}px;
  align-self: center;
`;

export const ButtonDoar = styled.TouchableOpacity`
width: ${ windowWidth * 0.30}px;
  height: ${ windowWidth * 0.30}px;
  border-radius: 12px;
  background-color: rgba(0,0,0,0.72);
  border: 1px;
  border-color: whitesmoke;
  align-self: center;
  
  margin-right: 16px;
  padding: 16px;
  justify-content: space-around;
`;

export const TextDoar = styled.Text`
  color:  whitesmoke;
  font-size: 14px;
`;

export const BurronAdotar = styled.TouchableOpacity`
 width: ${ windowWidth * 0.30}px;
  height: ${ windowWidth * 0.30}px;
  border-radius: 12px;
  background-color:  white;
  align-self: center;
  padding: 14px;
  justify-content: space-around;
`;

export const TextAdotar = styled.Text`
  color: black;
  font-size: 14px;
`;

export const TextContinue = styled.Text`
  color:  #F6B840;
  font-size: 18px;
`;
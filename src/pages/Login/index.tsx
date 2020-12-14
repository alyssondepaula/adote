import React from 'react';
import BoxLogin from '../../components/BoxLogin';
import Logo from '../../components/Logo';

import { Container,Dog } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo/>
      <BoxLogin/>
      <Dog/>
    </Container>
  );
};

export default Login;

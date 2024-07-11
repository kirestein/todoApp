import React from 'react';

import { Container, Form } from './styles';
import LoginComponent from '../../components/LoginComponent';

const Login: React.FC = () => {
  return (
    <Container>
        <Form>
            <h1>Faça o login</h1>
            <LoginComponent />
        </Form>
    </Container>
  );
}

export default Login;
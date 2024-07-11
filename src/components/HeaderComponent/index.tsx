import React, { ReactNode } from 'react';

import { Header } from './styles';

interface IHeaderComponentProps{
  children: ReactNode
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ children }) => {
  return (
    <Header>
        { children }
    </Header>
  );
}

export default HeaderComponent;
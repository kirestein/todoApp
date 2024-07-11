import React from 'react';

import { Button } from './styles';

interface IButtonComponentProps{
  text?: any;
  onclick: () => void;
  setValue?: (value: string) => void;

}

const ButtonComponent: React.FC<IButtonComponentProps> = ({
  text,
  onclick,
  setValue
}) => {
  return (
    <Button 
      onClick={onclick}>
        { text }
    </Button>
  );
}

export default ButtonComponent;
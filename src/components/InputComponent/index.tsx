import React from 'react';

import { Input, Label, Span } from './styles';

interface IInputComponentProps{
    type: string;
    label: string;
    placeholder?: string;
    value: any;
    setValue: (value: any) => void;
}

const InputComponent: React.FC<IInputComponentProps> = ({
    type,
    label,
    placeholder,
    value,
    setValue,
}) => {
  return (
    <>
        <Label>
            <Span>{ label }</Span>
            <Input 
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={e=>setValue(e.target.value)}
            />
        </Label>
    </>
  );
}

export default InputComponent;
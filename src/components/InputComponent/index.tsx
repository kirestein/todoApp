import React, { ReactNode } from 'react';

import * as C from './styles';

interface IInputComponentProps{
    type: string;
    label: string;
    placeholder?: string;
    value: any;
    setValue: (value: any) => void;
    children?: ReactNode
}

const InputComponent: React.FC<IInputComponentProps> = ({
    type,
    label,
    placeholder,
    value,
    setValue,
    children
}) => {
  return (
    <>
        <C.Label>
            <C.Span>{ label }</C.Span>
            <C.Line>
                <C.Input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                />
                { children }
            </C.Line>
        </C.Label>
    </>
  );
}

export default InputComponent;
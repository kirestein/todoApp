import React, { ReactNode } from 'react';

import { ModalBackdrop, MyModal } from './styles';

interface IModalProps{
    children: ReactNode
}

const Modal: React.FC<IModalProps> = ({
    children
}) => {
    
  return (
    <ModalBackdrop>
        <MyModal>
            { children }
        </MyModal>
    </ModalBackdrop>
  );
}

export default Modal;
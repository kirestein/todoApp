import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

export const MyModal = styled.div`
    padding: 2rem;
    max-width: 30rem;
    margin: 15.5rem;
    background: ${props=>props.theme.colors.tertiary};
    border: 0.3rem solid ${props=>props.theme.colors.primary};
    border-radius: 0.5rem;
    box-shadow: 0 0 3rem rgba(20,50,80.6);
`

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    `;

export const Form = styled.div`
    background-color: ${props=>props.theme.colors.tertiary};
    display: flex;
    min-width: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5rem solid ${props=>props.theme.colors.primary};
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3rem rgba(20,50,90.6);
`;
import styled from 'styled-components';

export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem 0.25rem;
    border: none;
    border-radius: 0.25rem;
    background: ${props=>props.theme.colors.secondary};
    color: ${props=>props.theme.colors.white};
    font-size: 1rem;
    transition: 0.3s all;
    cursor: pointer;
    &:hover{
        box-shadow: 0.2rem 0.2rem 1rem ${props=>props.theme.colors.black};
        opacity: 0.7;
    }
`;
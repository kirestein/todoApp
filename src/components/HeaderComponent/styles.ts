import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: ${props=>props.theme.colors.primary};
    color: #fff;
    box-shadow: 0 0 2rem rgba(0,0,0,0.3);
    border-radius: 0 0 1rem 1rem;
    margin-bottom: 2rem;
`;
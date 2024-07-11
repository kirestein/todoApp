import styled from 'styled-components';

export const Input = styled.input`
    width: 90%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    outline: none;
    &:focus{
        border: 1px solid ${props=>props.theme.colors.green};
        outline: none;
    }
`

export const Label = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${props=>props.theme.colors.white};
    

`

export const Span = styled.span`
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
`

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props=>props.theme.colors.white};
`
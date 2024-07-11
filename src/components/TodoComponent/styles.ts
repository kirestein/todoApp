import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-width: 50%;
    width: auto;
    flex-direction: column;
    background-color: ${props=>props.theme.colors.tertiary};
    border-radius: 1rem;
    overflow: auto;
    border: 0.4rem solid ${props=>props.theme.colors.primary};
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #00000030;
    color: ${props=>props.theme.colors.white};
    box-shadow: 0 0 2rem rgba(0,0,0,0.3);
    border-radius: 0 0 1rem 1rem;
    margin-bottom: 2rem;
`

export const H2 =  styled.h2`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props=>props.theme.colors.primary};
`

export const H3 =  styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
    color: ${props=>props.theme.colors.white};
`


export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 20%;
    height: 100%;
    gap: 10px;
    overflow-y: auto;
    max-height: 100%;
    padding: 10px;
`


export const Li = styled.li`
    display: grid;
    grid-template-columns: auto 20%;
    grid-template-areas: 'TXT BTN';
    margin: 1rem;
    width: 80%;
    padding: 0.2rem 1rem;
    background: #00000070;
    color: ${props=>props.theme.colors.white};
    border-radius: 0.6rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.6);
    }
`

export const Text = styled.div`
    grid-area: TXT;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    font-weight: 500;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    position: relative;
    margin-top: 0.6rem;
`
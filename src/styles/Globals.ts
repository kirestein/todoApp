import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root,
    body,
    html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Arial', sans-serif;
        background-color: ${props=>props.theme.colors.tertiary};
    }
`;

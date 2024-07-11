import styled from 'styled-components';

export const Span = styled.span`
    color: ${props=>props.theme.colors.warning};
    font-size: ${props=>props.theme.fonts.sizes.small};
    font-weight: bold;
    margin-bottom: 1rem;
    display: block;
`

export const Icon = styled.span`
    cursor: pointer;
`
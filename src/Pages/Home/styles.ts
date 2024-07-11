import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 98vh;
  background-color: ${props=>props.theme.colors.tertiary};
  overflow: auto;
`;

export const Content = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
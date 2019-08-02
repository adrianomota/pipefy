import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)}
    /*flex-grow: 0; permite o elemento se esticar;
  flex-shrink: 0; permite o elemento se encolher
  flex-basis: 320px; determina o tamanho base do elemento*/
    & + div {
    /* pega toda div que depois dela tem uma outra div */
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      background: #3b5bfd;
      width: 40px;
      height: 42px;
      border-radius: 50%;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

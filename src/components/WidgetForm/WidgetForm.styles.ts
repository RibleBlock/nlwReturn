import styled from 'styled-components';

export const HeaderForm = styled.header`
  font-size: 2rem;
  line-height: 2.4rem;
`;

export const MainForm = styled.div`
  display: flex;
  gap: 0.8rem;
  width: 100%;
  padding: 2rem 0;
`;

export const FeedbackButton = styled.button`
  background-color: #030303;
  color: #c3c3c3;
  border-radius: 2rem;
  width: 9.6rem;
  padding: 2rem 0;
  flex-grow: 1; /* para esticar e ficar sempre com a largura preenchida */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  border: .2rem solid transparent;
  &:focus, &:hover {
    outline: none;
    border-color: #8257E6;
  }
`;

export const FooterForm = styled.footer`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #c3c3c3;

  & > a {
    color: inherit;
    text-underline-offset: 2px;
  }
`;

export const FormBox = styled.div`
  background-color: #2b2b6b;
  padding: 1.6rem;
  border-radius: 1.6rem;
  margin-bottom: 1.6rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 5px 16px 1px rgba(0, 0, 0, 0.73);

  width: calc(100vw - 4rem);

  @media (min-width: 760px) {
    & {
      width: auto;
    }
  }
`;

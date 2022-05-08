import styled from 'styled-components';

import { ArrowLeft } from 'phosphor-react';

export const HeaderForm = styled.header`
  font-size: 2rem;
  line-height: 2.4rem;

  > button:nth-child(1) {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  > span {
    display: flex;
    align-items: center;
    gap: .8rem;
    > img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const ArrowBack = styled(ArrowLeft)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.COLORS.text_secundary};
  &:hover {
    color: ${({ theme }) => theme.COLORS.text_primary};
  }
  `;

export const MainForm = styled.form`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  width: 100%;
  padding: .8rem 0;

  > footer {
    width: 100%;
    display: flex;
    gap: .8rem;
    margin-top: .8rem;

    > button {
      padding: .8rem;
      background-color: ${({ theme }) => theme.COLORS.text_on_tooltip};
      border-radius: .4rem;
      border-color: transparent;
      transition: background-color 600ms;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.surface_secondary_hover};
      }
      &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.COLORS.surface_secondary_hover};
      }

      > svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.text_primary};
      }
    }

    > button[type=submit] {
      color: ${({ theme }) => theme.COLORS.text_primary};
      background-color: ${({ theme }) => theme.COLORS.brand};
      padding: .8rem;
      border-radius: .4rem;
      flex-grow: 1;

      font-size: 1.4rem;
      line-height: 2rem;
      transition: background-color 600ms;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.brand_hover};
      }
      &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.COLORS.brand_hover};
      }
  }
  }

  > textarea {
    resize: none;
    width: 100%;
    min-height: 13.2rem;
    width: 100%;
    padding: 1.2rem;

    line-height: 1.8rem;
    font-size: 1.6rem;
    font-family: Inter, Helvetica, sans-serif;

    border-radius: .6rem;
    border: .2rem solid ${({ theme }) => theme.COLORS.surface_secondary_hover};
    color: ${({ theme }) => theme.COLORS.text_primary};
    background-color: transparent;

    &:placeholder-shown {
      background-color: ${({ theme }) => theme.COLORS.surface_secondary};
    }
    &:focus {
      border: .2rem solid ${({ theme }) => theme.COLORS.brand_hover};
      outline: none;
    }
    /* Scrollbar */
    &::-webkit-scrollbar {
      width: .8rem;
    }
    &::-webkit-scrollbar-track {
      margin-right: .5rem;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10rem;
      background-color: ${({ theme }) => theme.COLORS.surface_secondary_hover};
      outline: none;
    }
  }
`;

export const FeedbackButton = styled.button`
  background-color: #030303;
  color: ${({ theme }) => theme.COLORS.text_primary};
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
    border-color: ${({ theme }) => theme.COLORS.brand_hover};
  }
`;

export const FooterForm = styled.footer`
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.COLORS.text_secundary};

  & > a {
    color: inherit;
    text-underline-offset: 2px;
  }
`;

export const FormBox = styled.div`
  background-color: ${({ theme }) => theme.COLORS.surface_secondary};
  padding: 1.6rem;
  border-radius: 1.6rem;
  margin-bottom: 1.6rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 5px 16px 1px rgba(0, 0, 0, 0.73);

  width: calc(100vw - 4rem);

  @media (min-width: 550px) {
    & {
      width: 34rem;
    }
  }
`;

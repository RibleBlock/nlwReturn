import styled from 'styled-components';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export const Container = styled(Popover)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 870px) {
    & {
      right: 2rem;
      bottom: 2rem;
    }
  }
`;

export const Icon = styled(ChatTeardropDots)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Button = styled(Popover.Button)`
  background-color: ${({ theme }) => theme.COLORS.brand};
  color: ${({ theme }) => theme.COLORS.text_on_brand_color};
  border-radius: 10rem;
  padding: 1rem;

  display: flex;
  align-items: center;

  > span {
    max-width: 0;
    overflow: hidden;
    transition: all 600ms;
    transition-timing-function: ease;

    span {
      /* pra dar um espaco */
      padding-left: 2px;
    }
  }

  &:hover span {
    max-width: 320px;
  }
`;

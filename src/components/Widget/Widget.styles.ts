import styled from 'styled-components';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export const Container = styled(Popover)`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 1.6rem;
`;

export const Icon = styled(ChatTeardropDots)`
  width: 2.2rem;
  height: 2.2rem;
`;

export const Button = styled(Popover.Button)`
  background-color: #8257E6;
  color: #fff;
  border-radius: 10rem;
  padding: 1rem;
  text-align: right;

  display: flex;
  align-items: center;
  gap: .2rem;

  > span {
    max-width: 0;
    overflow: hidden;
    transition: all 600ms;
    transition-timing-function: ease;

    span {
      padding-left: 2;
    }
  }

  &:hover span {
    max-width: 320px;
  }
`;

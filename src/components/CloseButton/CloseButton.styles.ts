import styled from 'styled-components';
import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export const LittleX = styled(X)`
  width: 1.8rem;
  height: 1.8rem;
`;

export const PopButton = styled(Popover.Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  color: #c1c1c1;
  background-color: transparent;
  &:hover {
    color: #f9f9f9;
  }
`;

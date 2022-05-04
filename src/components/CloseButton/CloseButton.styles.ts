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

  color: ${({ theme }) => theme.COLORS.text_secundary};
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.COLORS.text_primary};
  }
`;

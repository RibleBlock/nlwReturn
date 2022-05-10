import styled from 'styled-components';
import { CircleNotch } from 'phosphor-react';

export const LoadingSvg = styled(CircleNotch)`
  width: 2.4rem;
  height: 2.4rem;
  animation: rodar 2s linear infinite;

  @keyframes rodar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

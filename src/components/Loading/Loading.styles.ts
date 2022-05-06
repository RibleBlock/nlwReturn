import styled from 'styled-components';
import { CircleNotch } from 'phosphor-react';

export const LoadingSvg = styled(CircleNotch)`
  width: 2.4rem;
  height: 2.4rem;
  animation: rodar 2s linear infinite;

  @keyframes rodar {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

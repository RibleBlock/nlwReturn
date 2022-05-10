import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0;
  width: 30.4rem;

  > span {
    font-size: 2.2rem;
    line-height: 2.8rem;
    margin-top: .8rem;
  }

  > button {
    padding: .8rem 2.4rem;
    margin-top: 2.4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    border-radius: .4rem;
    border-color: transparent;
    color: ${({ theme }) => theme.COLORS.text_primary};
    background-color: ${({ theme }) => theme.COLORS.surface_primary};
    transition: all 700ms;
    &:hover, &:focus {
      background-color: ${({ theme }) => theme.COLORS.surface_secondary_hover};
    }
  }
`;

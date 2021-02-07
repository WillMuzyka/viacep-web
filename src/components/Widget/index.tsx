import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface WidgetProps extends HTMLAttributes<HTMLDivElement> {
  isValidCep?: boolean;
}

export const Widget = styled.div<WidgetProps>`
  width: auto;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  border-width: 2px;
  overflow: hidden;

  width: 80%;
  max-width: 350px;
  margin: 10% 10% auto;

  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 8px;
  }

  &:first-child {
    margin-right: 0;
  }
  &:last-child {
    margin-left: 32px;
    ${(props) => !props.isValidCep
      && css`
        opacity: 0;
      `}
  }


  @media screen and (max-width: 550px) {
    max-width: 80%;
    min-width: 200px;
    &:first-child {
      margin: 30% 10% 0;
      margin-right: 10%;
    }
    &:last-child {
      margin-left: 10%;
    }
  }
`;

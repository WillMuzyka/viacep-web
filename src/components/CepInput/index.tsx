import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface CepInputProps extends HTMLAttributes<HTMLInputElement> {
  isValidCep: boolean;
  isFocused: boolean;
}

export const CepInput = styled.input<CepInputProps>`
  margin-bottom: 8px;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.isFocused
    && css`
      border-color: ${({ theme }) => theme.colors.secondary};
    `}
`;

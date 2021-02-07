import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface CepInputProps extends HTMLAttributes<HTMLInputElement> {
  hasError: boolean;
  isFocused: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CepInput = styled.input<CepInputProps>`
  margin-bottom: 8px;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;

  ${(props) => props.isFocused
    && css`
      border-color: ${({ theme }) => theme.colors.secondary};
    `}

  ${(props) => !props.isFocused && props.hasError
    && css`
      border-color: ${({ theme }) => theme.colors.wrong};
    `}
`;

export const ErrorMessage = styled.text`
  color: ${({ theme }) => theme.colors.wrong};
  font-size: 12px;
  font-weight: 500;
  ${(props) => typeof props?.children === 'string'
    && props.children.length !== 0
    && css`
      padding-bottom: 8px;
    `}
`;

export const SearchButton = styled.button``;

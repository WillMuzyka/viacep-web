import { HTMLAttributes, ButtonHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

interface CepInputProps extends HTMLAttributes<HTMLInputElement> {
  hasError: boolean;
  isFocused: boolean;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // eslint-disable-next-line react/require-default-props
  loading?: boolean;
}

const rotation = keyframes`
  100% {
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-tranform: rotate(360deg);
  }
`;

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

const ButtonContainer = styled.button<ButtonProps>`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  p {
    padding: 0;
    margin: 0;
  }
  svg {
    ${(props) => !!props.loading
      && css`
        margin: 0;
        animation: ${rotation} 2s linear infinite;
      `}
    margin-right: 8px;
  }
`;

// eslint-disable-next-line no-undef
export const SearchButton: React.FC<ButtonProps> = (
  { children, loading, ...rest }: ButtonProps,
) => (
  <ButtonContainer type="button" loading={loading} {...rest}>
    {loading ? (
      <>
        <FiLoader />
        <p>Carregando</p>
      </>
    ) : (
      children
    )}
  </ButtonContainer>
);

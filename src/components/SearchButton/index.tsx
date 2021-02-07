import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface SearchButtonProps extends HTMLAttributes<HTMLButtonElement> {
  hasAllDigits: boolean;
}

export const SearchButton = styled.button<SearchButtonProps>``;

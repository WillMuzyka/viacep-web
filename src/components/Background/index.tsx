import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string;
}

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  display: flex;
  flex-direction: row;
  flex: 1;
  position: relative;

  @media screen and (max-width: 550px) {
    background-image: none;
    flex-direction: column;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    * {
      position: relative;
      z-index: 10;
    }
  }
`;

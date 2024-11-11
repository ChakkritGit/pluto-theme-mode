import styled, { css, keyframes } from "styled-components"

export const WrapperSwitch = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

export const IconWrapper = styled.div<{ $active?: string, $iconSize?: string }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &>svg {
    font-size: ${props => props.$iconSize};
  }

  &:hover {
    color: ${props => props.$active};
    transition: .3s;
  }
`

export const WrapperMenu = styled.div<{ $colorLight?: string, $colorDark?: string, $backgroundLight?: string, $backgroundDark?: string, $borderColorLight?: string, $borderColorDark?: string, $borderRadius?: string, $width?: string, $height?: string, $padding?: string, $gap?: string, $positionX?: string, $positionY?: string, $zIndex?: number, $transition: boolean, $openMenu: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => props.$width};
  height: ${props => props.$height};
  gap: ${props => props.$gap};
  top:${props => props.$positionY};
  right: ${props => props.$positionX};
  padding: ${props => props.$padding};
  background-color: ${props => props.theme.mode === 'dark' ? props.$backgroundDark : props.$backgroundLight};
  border: 1.5px solid ${props => props.theme.mode === 'dark' ? props.$borderColorDark : props.$borderColorLight};
  box-shadow: ${props => props.theme.mode === 'dark' ? `5px 10px 25px -10px rgba(34, 34, 34, 0.7)` : `5px 10px 15px -10px rgba(0, 0, 0, .20)`};
  color: ${props => props.theme.mode === 'dark' ? props.$colorLight : props.$colorDark};
  border-radius: ${props => props.$borderRadius};
  z-index: ${props => props.$zIndex};
  overflow: hidden;

  ${props => props.$transition && css`
    transition: background-color 0.3s ease-in-out;
    animation: ${props.$openMenu ? expand : collapse} 0.3s ease forwards;
  `}
`

export const ModeOption = styled.div<{ $active?: boolean, $borderRadius?: string, $activeColor?: string, $fontSize?: string, $iconSize?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: ${props => props.$borderRadius};
  cursor: pointer;

  &>svg {
    font-size: ${props => props.$iconSize};
  }

  &>span {
    font-size: ${props => props.$fontSize};
  }

  &:hover {
    background-color: ${props => props.$activeColor};
    color: white;
    transition: .3s;
  }

  ${props => props.$active && css`
    background-color: ${props.$activeColor};
    color: white;
  `}
`

const expand = keyframes`
  from {
    opacity: 0;
    scale: 0.9;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    scale: 1;
    transform: translateY(0);
  }
`

const collapse = keyframes`
  from {
    opacity: 1;
    scale: 1;
    transform: translateY(10px);
  }
  to {
    opacity: 0;
    scale: 0.9;
    transform: translateY(0);
  }
`

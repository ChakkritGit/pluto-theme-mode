import React, { useEffect, useRef, useState } from 'react'
import { TbMoon, TbSun, TbSunMoon } from "react-icons/tb"
import { useTheme } from './PlutoProvider'
import { IconWrapper, ModeOption, WrapperMenu, WrapperSwitch } from '../style/style'
import { ToggleButtonProps } from '../types'

export default function ToggleButton({
  lightModeLabel = 'Light',
  darkModeLabel = 'Dark',
  systemModeLabel = 'System',
  lightModeIcon = <TbSun />,
  darkModeIcon = <TbMoon />,
  systemModeIcon = <TbSunMoon />,
  backgroundColorLight = '#ffffff',
  backgroundColorDark = '#222222',
  borderColorLight = '#e5e7e9',
  borderColorDark = '#222222',
  colorLight = '#e5e7e9',
  colorDark = '#3b3b3b',
  activeColor = '#6495ED',
  cardBorderRadius = '24px',
  menuBorderRadius = '16px',
  height = '155px',
  width = 'max-content',
  padding = '.7rem',
  gap = '.5rem',
  positionX = '20px',
  positionY = '40px',
  zIndex = 100,
  fontSize = '16px',
  iconSize = '24px'
}: ToggleButtonProps) {
  const { theme, toggleTheme } = useTheme()
  const { mode } = theme
  const [openMenu, setOpenMenu] = useState(false)
  const storeLocalTheme = localStorage.getItem('themeMode') ?? false

  const menuRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(e.target as Node) &&
      iconRef.current && !iconRef.current.contains(e.target as Node)
    ) {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    if (openMenu) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    if (openMenu && menuRef.current && iconRef.current) {
      const menu = menuRef.current
      const icon = iconRef.current
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const menuWidth = menu.offsetWidth
      const menuHeight = menu.offsetHeight
      const iconRect = icon.getBoundingClientRect()

      const spaceRight = windowWidth - iconRect.right
      const spaceLeft = iconRect.left
      const spaceBottom = windowHeight - iconRect.bottom
      const spaceTop = iconRect.top

      if (spaceRight < menuWidth) {
        menu.style.right = `${Math.abs(spaceRight) + 10}px`
      } else {
        menu.style.right = '20px'
      }

      if (spaceBottom < menuHeight) {
        menu.style.top = `${Math.abs(spaceBottom) + 10}px`
      } else {
        menu.style.top = '40px'
      }

      if (spaceLeft < menuWidth) {
        menu.style.left = `${Math.abs(spaceLeft) + 10}px`
      }

      if (spaceTop < menuHeight) {
        menu.style.top = `${Math.abs(spaceTop) + 10}px`
      }
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [openMenu])

  const isSystemActive = mode === 'system'

  return (
    <WrapperSwitch>
      <IconWrapper
        data-testid="icon-wrapper"
        onClick={() => setOpenMenu(!openMenu)}
        $active={activeColor}
        $iconSize={iconSize}
        ref={iconRef}>
        {storeLocalTheme === 'light' && mode === 'light' ? lightModeIcon : storeLocalTheme === 'dark' && mode === 'dark' ? darkModeIcon : systemModeIcon}
      </IconWrapper>
      {/* <div data-testid="div-wrapper" style={{ backgroundColor: theme.mode === 'dark' ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)' }}></div> */}

      {openMenu && <WrapperMenu
        $backgroundLight={backgroundColorLight}
        $backgroundDark={backgroundColorDark}
        $borderColorLight={borderColorLight}
        $borderColorDark={borderColorDark}
        $colorLight={colorLight}
        $colorDark={colorDark}
        $borderRadius={cardBorderRadius}
        $height={width}
        $width={height}
        $padding={padding}
        $gap={gap}
        $positionX={positionX}
        $positionY={positionY}
        $zIndex={zIndex}
        ref={menuRef}>
        <ModeOption
          onClick={() => toggleTheme('light')}
          $active={storeLocalTheme === 'light' && mode === 'light'}
          $borderRadius={menuBorderRadius}
          $activeColor={activeColor}
          $fontSize={fontSize}
          $iconSize={iconSize}>
          {lightModeIcon}
          <span>{lightModeLabel}</span>
        </ModeOption>
        <ModeOption
          onClick={() => toggleTheme('dark')}
          $active={storeLocalTheme === 'dark' && mode === 'dark'}
          $borderRadius={menuBorderRadius}
          $activeColor={activeColor}
          $fontSize={fontSize}
          $iconSize={iconSize}>
          {darkModeIcon}
          <span>{darkModeLabel}</span>
        </ModeOption>
        <ModeOption
          onClick={() => toggleTheme('system')}
          $active={!isSystemActive && !storeLocalTheme}
          $borderRadius={menuBorderRadius}
          $activeColor={activeColor}
          $fontSize={fontSize}
          $iconSize={iconSize}>
          {systemModeIcon}
          <span>{systemModeLabel}</span>
        </ModeOption>
      </WrapperMenu>}
    </WrapperSwitch>
  )
}

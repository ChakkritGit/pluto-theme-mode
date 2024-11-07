/**
 * Props for the ToggleButton component
 */
interface ToggleButtonProps {
  /** 
   * Label for light mode. String type, no units needed.
   */
  lightModeLabel?: string;

  /** 
   * Label for dark mode. String type, no units needed.
   */
  darkModeLabel?: string;

  /** 
   * Label for system mode. String type, no units needed.
   */
  systemModeLabel?: string;

  /** 
   * Icon for light mode. ReactNode type (e.g., JSX or icon).
   */
  lightModeIcon?: React.ReactNode;

  /** 
   * Icon for dark mode. ReactNode type (e.g., JSX or icon).
   */
  darkModeIcon?: React.ReactNode;

  /** 
   * Icon for system mode. ReactNode type (e.g., JSX or icon).
   */
  systemModeIcon?: React.ReactNode;

  /** 
   * Background color for light mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#ffffff' or 'rgb(255,255,255)'
   */
  backgroundColorLight?: string;

  /** 
   * Background color for dark mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#222222' or 'rgb(34,34,34)'
   */
  backgroundColorDark?: string;

  /** 
   * Border color for light mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#e5e7e9' or 'rgb(229,231,233)'
   */
  borderColorLight?: string;

  /** 
   * Border color for dark mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#3b3b3b' or 'rgb(59,59,59)'
   */
  borderColorDark?: string;

  /** 
   * Text color for light mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#e5e7e9' or 'rgb(229,231,233)'
   */
  colorLight?: string;

  /** 
   * Text color for dark mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#3b3b3b' or 'rgb(59,59,59)'
   */
  colorDark?: string;

  /** 
   * Color for the active mode. String type, CSS color values (e.g., hex, rgba).
   * Example: '#6495ED' or 'rgb(100,149,237)'
   */
  activeColor?: string;

  /** 
   * Border radius for the card. String type, CSS units such as 'px', 'em', 'rem'.
   * Example: '24px', '1rem', '10%'
   */
  cardBorderRadius?: string;

  /** 
   * Border radius for the menu. String type, CSS units such as 'px', 'em', 'rem'.
   * Example: '16px', '1rem', '10%'
   */
  menuBorderRadius?: string;

  /** 
   * Size of the Text. String type, CSS units such as 'px', 'em', '%'.
   * Example: '160px', '20%', '10rem'
   */
  fontSize?: string;

  /** 
   * Size of the Icon. String type, CSS units such as 'px', 'em', '%'.
   * Example: '160px', '20%', '10rem'
   */
  iconSize?: string;

  /** 
   * Width of the button/menu. String type, CSS units such as 'px', 'em', '%'.
   * Example: '160px', '20%', '10rem'
   */
  width?: string;

  /** 
   * Height of the button/menu. String type, CSS units such as 'px', 'em', '%'.
   * Example: '155px', '20%', '10rem'
   */
  height?: string;

  /** 
   * Padding inside the button/menu. String type, CSS units such as 'px', 'rem', '%'.
   * Example: '0.7rem', '10px', '5%'
   */
  padding?: string;

  /** 
   * Gap between elements inside the menu. String type, CSS units such as 'px', 'em', '%'.
   * Example: '1rem', '10px', '5%'
   */
  gap?: string;

  /** 
   * Horizontal position of the button/menu. String type, CSS units such as 'px', '%', 'vw'.
   * Example: '20px', '10%', '5vw'
   */
  positionX?: string;

  /** 
   * Vertical position of the button/menu. String type, CSS units such as 'px', '%', 'vh'.
   * Example: '30px', '10%', '5vh'
   */
  positionY?: string;

  /** 
   * Index of the button/menu. String type, CSS units such as 'number'.
   * Example: '1', '100'
   */
  zIndex?: number;
}


export type { ToggleButtonProps }
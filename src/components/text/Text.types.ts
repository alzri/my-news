import React from 'react';

export type TextComponent = 'h1' | 'h2' | 'h3' | 'p' | 'span';
export type TextSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'paragraph-xs'
  | 'paragraph-s'
  | 'paragraph-m'
  | 'paragraph-l';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent-primary'
  | 'accent-secondary'
  | 'accent-tertiary'
  | 'active-state'
  | 'inactive-state';

export interface ITextProps extends React.HTMLAttributes<HTMLElement> {
  component?: TextComponent;
  size: TextSize;
  color?: TextColor;
  children?: React.ReactNode;
}

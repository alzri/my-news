import React, { forwardRef } from 'react';
import { ITextProps } from './Text.types';
import clsx from 'clsx';
import styles from './Text.module.scss';

export const Text = forwardRef<HTMLElement, ITextProps>(
  ({ component = 'p', size, color = 'primary', children, className, ...rest }, ref) => {
    const TagName = component as React.ElementType;
    const classNames = clsx('text', className, styles[size], styles[color]);
    const domProps = rest as Record<string, unknown>;

    return React.createElement(
      TagName,
      { ref: ref as React.Ref<HTMLElement>, className: classNames, ...domProps },
      children
    );
  }
);

Text.displayName = 'Text';

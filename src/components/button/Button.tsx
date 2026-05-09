import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  component?: 'button' | 'a';
  href?: string;
  version?: 'red' | 'white' | 'transparent' | 'link';
  children?: React.ReactNode;
}

export const Button = ({
  component = 'button',
  href,
  version = 'white',
  className,
  children,
  ...rest
}: IButtonProps) => {
  const isAnchor = component === 'a';
  const classNames = clsx(styles.button, styles[version], className);

  return isAnchor && href ? (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  ) : (
    <button type="button" {...rest} className={classNames}>
      {children}
    </button>
  );
};

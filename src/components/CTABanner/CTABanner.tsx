'use client';

import { Text } from '../text/Text';
import { Button } from '../button/Button';
import styles from './CTABanner.module.scss';
import { useState } from 'react';

type Action = {
  label: string;
  onClick?: () => void;
};

export interface ICTABannerProps {
  title: string;
  desc: string;
  acceptAction: Action;
  declineAction: Action;
}

export const CTABanner = ({ title, desc, acceptAction, declineAction }: ICTABannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  const handleAccept = () => {
    (acceptAction.onClick ?? (() => console.log('accepted')))();
    setIsVisible(false);
  };

  const handleDecline = () => {
    (declineAction.onClick ?? (() => console.log('declined')))();
    setIsVisible(false);
  };

  return (
    <div className={styles['cta-banner-wrapper']}>
      <div className={styles['cta-banner-content']}>
        <Text component="h3" size="h3" color="tertiary">
          {title}
        </Text>
        <Text component="p" size="paragraph-m" color="tertiary">
          {desc}
        </Text>
      </div>

      <div className={styles['cta-banner-action']}>
        <Button version="transparent" component="button" onClick={handleDecline}>
          {declineAction.label}
        </Button>

        <Button version="white" component="button" onClick={handleAccept}>
          {acceptAction.label}
        </Button>
      </div>
    </div>
  );
};

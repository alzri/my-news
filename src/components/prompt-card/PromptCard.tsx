import { IPromptCardProps } from './PromptCard.types';
import styles from './PromptCard.module.scss';
import { Text } from '../text/Text';
import { Button } from '../button/Button';

export const PromptCard = ({
  title,
  desc,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: IPromptCardProps) => {
  return (
    <div className={styles['prompt-card-wrapper']}>
      <div className={styles['prompt-card-content']}>
        <Text component="h3" size="h3" color="tertiary">
          {title}
        </Text>
        <Text component="p" size="paragraph-m" color="tertiary">
          {desc}
        </Text>
      </div>
      <div>
        <Button component="button" version="transparent" href={primaryHref}>
          {primaryLabel}
        </Button>
        <Button component="button" version="white" href={secondaryHref}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
};

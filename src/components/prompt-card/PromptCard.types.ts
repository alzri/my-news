import { IButtonProps } from '../button/Button';

export interface IPromptCardProps extends IButtonProps {
  title?: string;
  desc?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

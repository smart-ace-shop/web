import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Logo.module.scss';

export type LogoVariantsType = VariantProps<typeof logoVariants>;

export const logoVariants = cva(cn('hover:text-app-font', styles.logo), {
  variants: {
    variant: {
      default: '',
      colored: '',
    },

    noText: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

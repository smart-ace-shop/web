import cn from 'classnames';
import Link from 'next/link';
import type { FC } from 'react';

import { APP_NAME } from '@/app/constants';

import { type LogoVariantsType, logoVariants } from './Logo.variants';
import { Phoenix } from './Phoenix';

export const Logo: FC<LogoVariantsType> = ({ variant, noText }) => {
  return (
    <Link
      href='/'
      className={cn(
        'text-logo-font flex items-center gap-[.65em] font-black',
        'transition-colors',
        logoVariants({ variant }),
      )}
    >
      <Phoenix />

      {!noText && <span className={cn('text-[1.5em]')}>{APP_NAME}</span>}
    </Link>
  );
};

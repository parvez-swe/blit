import * as React from 'react';
import { css } from '@emotion/react';

/** Renders its children in a vertical column, with spacing inbetween.
 *  Use this for typical spacing between sections on a page, instead of relying on elements providing
 *  their own margins.
 */
export const Stack = ({ 
  children,
  gap = '16px',
  ...rest 
}: {
  children: React.ReactNode,
  gap?: string,
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      {...rest}
      css={
        css`
          width: 100%;
          display: grid;
          gap: ${gap || '16px'};
          grid-template-columns: 1fr;
        `
      }
    >
      {children}
    </div>
  );
};

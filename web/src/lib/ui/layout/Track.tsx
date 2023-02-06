import * as React from 'react';
import { css } from '@emotion/react';

/** Renders its children in a horizontal flex track. */
export const Track = ({ 
  children,
  gap = '16px',
  justify = 'flex-start',
  align = 'flex-start',
  wrap = true,
  ...rest
}: {
  /** Spacing between the children. */
  gap?: string;
  /** How the children will be horizontally. (`justify-content` on the underlying flex row) */
  justify?: 'flex-start' | 'flex-end' | 'space-between' | 'stretch' | 'space-around',
  /** How the children will be aligned vertically. */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  /** Turns on `flex-wrap`, making the elements wrap around to new lines if there's no space for all of them. */
  wrap?: boolean,
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <div
      {...rest}
      css={css`
        display: flex;
        flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
        justify-content: ${justify};
        align-items: ${align};
        // gap: ${gap}; // Doesn't work for IOS Safari yet - could consider implementing gap with margins on children instead.
        // ugly margin implementation of gap for IOS and MacOS Safari.
        margin-right: -${gap};
        margin-bottom: -${gap};
      `}
    >
      {/* Super ugly hack stuff, also to facilitate IOS and MacOS. */}
      {React.Children.map(children, x => x).filter(x => !!x).map((child, i) => <div key={i} css={css`
        margin-right: ${gap};
        margin-bottom: ${gap};
      `}>{child}</div>)}
    </div>
  );
};
import * as React from 'react';
import {css} from '@emotion/react';

/** Renders its children in a centered container with a specified maximum width. */
export const Container = ({
  maxWidth = '1200px',
  children,
}: {
  maxWidth?: string,
  children,
}) => {
  return <div css={css`
    width: 100%;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: 0 16px;
  `}>
    {children}
  </div>;
}
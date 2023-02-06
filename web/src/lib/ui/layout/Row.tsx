import * as React from 'react';
import {css} from '@emotion/react';

/** Renders its children in a row that collapses to a column on small screens. */
export const Row = ({
  columns,
  gap = '32px',
  breakAt = '0',
  align = 'stretch',
  children,
}: {
  /** Passed to `grid-template-columns`, describing the size of children. F.ex. `1fr 3fr 300px` */
  columns: string,
  /** The gap between the columns. */
  gap?: string,
  /** The threshold at which to switch to a vertical layout. */
  breakAt?: string,
  /** Controls the vertical alignment of the row's columns. By default all columns stretch to the same length. `flex-start` will
   * make the children only take up as much space as they need. */
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center',
  children: React.ReactNode,
}) => {
  return <div css={css`
    display: grid;
    grid-template-columns: ${columns};
    gap: ${gap};
    align-items: ${align};
    @media(max-width: ${breakAt}) {
      grid-template-columns: 1fr;
    }
  `}>
    {React.Children.map(children, child => <div>{child}</div>)}
  </div>;
}
import { css } from "@emotion/react"

export const AutoGrid = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return <div css={css`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
    gap: 16px;
  `}>
    {children}
  </div>
}
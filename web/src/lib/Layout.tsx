import { css } from "@emotion/react"
import { Inter, Plus_Jakarta_Sans } from "@next/font/google"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const Layout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return <div className={inter.className} css={css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
  `}>
    <Navbar/>
    <div css={css`flex: 999;`}>
      {children}
    </div>
    <Footer/>
  </div>
}
import { css } from "@emotion/react"
import Link from "next/link"
import { useState } from "react";
import {RxHamburgerMenu} from "react-icons/rx"
import { Container } from "./ui/layout/Container";

export const Navbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return <>
    <Container>
      <div css={css`
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        margin-bottom: 64px;
      `}>
        <Link href="/">Furnituah</Link>
        <div>
          <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <RxHamburgerMenu/>
          </button>
        </div>
      </div>
    </Container>
    {menuIsOpen && <div>
      MENU  
    </div>}
  </>
}
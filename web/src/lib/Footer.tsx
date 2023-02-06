import { css } from "@emotion/react"
import Link from "next/link"
import { Container } from "./ui/layout/Container"

export const Footer = () => {
  return <div css={css`
    padding: 16px;
  `}>
    <Container>
      <div css={css`
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 64px 0;
        border-top: 1px solid black;
        margin-top: 64px;

        h3 {
          font-size: 14px;
        }

        a {
          color: black;
        }

        @media(max-width: 900px) {
          grid-template-columns: 1fr;
        } 
      `}>
        <div>
          <h2>Furnituah</h2>
          <div>Furnituah AS</div>
          <div>Gateveien 33, Oslo</div>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="https://vg.no">VG</Link>
            </li>
            <li>
              <Link href="https://db.no">Dagbladet</Link>
            </li>
            <li>
              <Link href="https://ap.no">Aftenposten</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="https://vg.no">VG</Link>
            </li>
            <li>
              <Link href="https://db.no">Dagbladet</Link>
            </li>
            <li>
              <Link href="https://ap.no">Aftenposten</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <Link href="https://vg.no">VG</Link>
            </li>
            <li>
              <Link href="https://db.no">Dagbladet</Link>
            </li>
            <li>
              <Link href="https://ap.no">Aftenposten</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
}
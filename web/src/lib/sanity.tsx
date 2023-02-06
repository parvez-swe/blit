import { css } from '@emotion/react';
import { PortableText } from '@portabletext/react';
import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { Row } from './ui/layout/Row';

export const sanity = SanityClient({
  projectId: '20wksnmj',
  dataset: 'production',
  apiVersion: '2023-01-31',
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanity);

export function SectionBlocks({ sections }: { sections: any }) {

  return <div>
    {sections.map((section, i) => <div key={i}>
      
    </div>)}
  </div>

}

export function TextBlocks({ blocks }: { blocks: any }) {
  return <div css={css`
    display: grid;
    gap: 16px;
  `}>
    <PortableText
      value={blocks}
      components={{
        types: {
          image: ({value}) => <div>
            <img 
              src={imageUrlBuilder.image(value).url()}
              css={css`
                max-width: 100%;
                border-radius: 8px;
              `}
            />
            <div css={css`
              font-size: 14px;
              text-transform: uppercase;
            `}>{value.caption}</div>
          </div>,
          product: (({value}) => <>
            <Link href={`/products/${value.slug?.current}`} css={css`
              display: block;
              padding: 16px;
              border: 1px solid rgb(180,180,180);
              border-radius: 8px;
              text-decoration: unset;
              color: unset;

              transition: background-color 0.2s;

              &:hover {
                background-color: rgb(250, 250, 250);
              }
            `}>
              <Row breakAt="450px" columns="140px 1fr">
                <img src={imageUrlBuilder.image(value.productImage).width(600).url()} />
                <div>
                  <h3 css={css`margin: 0;`}>
                    {value.productName}&nbsp;
                    ${value.price}
                  </h3>
                  <div css={css`
                    font-size: 14px;
                  `}>
                    <TextBlocks blocks={value.summary} />
                  </div>
                </div>
              </Row>
            </Link>
        </>)
        }
      }}
    />
  </div>
}

/* 
  TODO: In a production context, we want to discriminate on different reference types, and only pull in the fields we need in the rendering component.
  Now it just pulls in the entire referenced document, which could be a ton of data.
*/
export const textBlocksProjectionFragment = `
  {
    ...,
    _type == 'reference' => @->
  }
`;
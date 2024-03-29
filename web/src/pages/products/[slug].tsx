import Head from 'next/head'
import { GetServerSideProps } from 'next'
import {imageUrlBuilder, sanity, TextBlocks, textBlocksProjectionFragment} from 'src/lib/sanity'
import { Container } from 'src/lib/ui/layout/Container'
import { Row } from 'src/lib/ui/layout/Row'
import { css } from '@emotion/react'
import { Track } from 'src/lib/ui/layout/Track'

export default function Page({ product }: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Row breakAt="900px" columns="1fr 1fr">
            <div>
              <img src={imageUrlBuilder.image(product.productImage).url()}/>
            </div>
            <div>
              <h1>{product.productName}</h1>
              <div css={css`
                font-size: 20px;
              `}>
                <TextBlocks blocks={product.summary} />
              </div>
              <TextBlocks blocks={product.productDescription} />
              <Track>
                <button css={css`
                  padding: 12px 18px;
                  border: 1px solid black;
                  border-radius: 8px;
                `}>Add to cart</button>
              </Track>
            </div>
          </Row>
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const products = await sanity.fetch(`
  *[_type == "product" && slug.current == $slug]{
    ...,
    'productDescription': productDescription[] ${textBlocksProjectionFragment}
  }`, { slug: context.params.slug });
  const product = products[0];

  if (!product) { 
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product
    }
  }
}
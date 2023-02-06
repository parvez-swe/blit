import {sanity} from "src/lib/sanity";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const Page = function({ articles }) {
  return <div>
    <h1>Articles</h1>
    <div>
      {articles.map((article, i) => <div key={i}>
        <Link href={`/articles/${article.slug?.current}`}>{article.title}</Link>
      </div>)}
    </div>
  </div>
}

export default Page;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const articles = await sanity.fetch(`*[_type == "article"]{
    title,
    slug,
  }`, {});

  return {
    props: {
      articles
    }
  }
}
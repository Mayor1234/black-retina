import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts } from '../lib';

// const posts = [
//   { title: 'Web Development', content: 'What is JavaScript' },
//   { title: 'Football Prediction', content: 'who will win the EPL' },
// ];

export default function Home({ posts, title }) {
  return (
    <div className="container mx-auto px-10">
      <Head>
        <title>{title ? title + '-Black Retina' : 'Black Retina'}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content="Black Retina" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mx-8 px-8">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../lib';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl font-semibold mb-8 border-b pb-4 text-gray-700">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.slug} className="flex items-center w-full mb-4">
          <div className="flex-none w-16">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-400 font-xs">
              {moment(post.createdAt).format('DD MMM, y')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md text-gray-700 capitalize"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

import React from 'react';
import { Categories, PostWidget } from '../../components';
import { PostDetail, Author, CommentForm, Comment } from '../../components';

const PostDetails = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className=" col-span-1  lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentForm />
          <Comment />
        </div>
        <div className=" col-span-1  lg:col-span-4">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import calenderIcon from '../public/calender.png';

const PostCard = ({ post }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl semibold capitalize">
        <Link href={`/post/${post.slug}`}>{post.title} ?</Link>
      </h1>
      <div className="block lg:flex justify-center items-center text-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width={50}
            height={50}
            className="rounded-full align-middle"
          />
          <p className="inline capitalize text-gray-700 align-middle ml-2 text-lg  ">
            {post.author.name}
          </p>
        </div>
        <div className="text-gray-700 flex justify-center items-center ">
          <Image
            src={calenderIcon}
            alt="calender"
            width={20}
            height={20}
            className="mr-2"
          />
          <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
        </div>
      </div>
      <p className="text-gray-700 text-lg font-normal text-center px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 hover:scale-x-90 inline-block text-lg font-medium rounded-md text-white bg-orange-500 px-8 py-2 cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

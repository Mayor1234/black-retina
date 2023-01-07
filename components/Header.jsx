import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Sports', slug: 'sport' },
  { name: 'Web Developement', slug: 'web-dev' },
  { name: 'Education', slug: 'education' },
  { name: 'Building Construction', slug: 'build-const' },
  { name: 'Health and Fitness', slug: 'health-fit' },
];

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="w-full border-b border-slate-400 inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              Black Retina
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white font-semibold ml-4 cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

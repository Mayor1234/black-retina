import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../lib';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesResult) => setCategories(categoriesResult));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl font-semibold mb-8 border-b pb-4 text-gray-700">
        Categories
      </h3>
      {console.log(categories)}
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer capitalize text-gray-700 text-md pb-3 mb-3 block">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

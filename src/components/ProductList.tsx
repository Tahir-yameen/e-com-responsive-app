import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* Product One */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/06.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/01.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-HaYaTi text-HaYaTi w-max py-2 px-4 text-xs hover:bg-HaYaTi hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* Product Two */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/21.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/02.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-HaYaTi text-HaYaTi w-max py-2 px-4 text-xs hover:bg-HaYaTi hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* Product Three */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/03.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/16.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-HaYaTi text-HaYaTi w-max py-2 px-4 text-xs hover:bg-HaYaTi hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* Product Four */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/22.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/09.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-HaYaTi text-HaYaTi w-max py-2 px-4 text-xs hover:bg-HaYaTi hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;

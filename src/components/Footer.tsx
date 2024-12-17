import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
          <div className='text-2xl tracking-wide'>HaYaTi</div>
          </Link>
          <p>
            Near Airport, Central Plaza, Malir, Karachi, Pakistan
          </p>
          <span className="font-semibold">hellow@HaYaTi.com</span>
          <span className="font-semibold">+92 331 234 5678</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/insta.png" alt="" width={16} height={16} />
            <Image src="/Youtube.png" alt="" width={16} height={16} />
            <Image src="/Twitter.png" alt="" width={16} height={16} />
            <Image src="/L-In.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blogs</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SubsCribe</h1>
          <p>Be The First To Get The Latest News About New Trends, Promotions & Much More..!</p>
          <div className="flex">
            <input
            type="text"
            placeholder="Email address"
            className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-HaYaTi text-white">Join Us</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image src="/MasterCard.png" alt="" width={40} height={20} />
              <Image src="/Visa.png" alt="" width={40} height={20} />
              <Image src="/PP.png" alt="" width={40} height={20} />
              <Image src="/Py.png" alt="" width={40} height={20} />
              <Image src="/EP.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className=""> 2024 HaYaTi Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currencies</span>
            <span className="font-medium">$ USD | PKR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
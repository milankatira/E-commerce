/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
const Feature15 = ({ userData }) => {
  console.log(userData, 'userData');
  return (
    <div className='2xl:mx-auto 2xl:container'>
      <div className='lg:px-20 md:px-6 px-4 md:py-12 py-8'>
        <h1 className='lg:text-4xl text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center'>
          Discover Lufu’s World
        </h1>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap -m-4'>
              {userData.map((data) => {
                return (
                  <>
                    <div key={data._id} className='p-4 md:w-1/3'>
                      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                        <img
                          className='hover:scale-125 w-full object-cover object-center transition-all duration-300'
                          src={data.images[0].url}
                          alt='blog'
                        />

                        <div className='p-6'>
                          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                            {data.category}
                          </h2>
                          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                            {data.name}
                          </h1>
                          <p className='leading-relaxed mb-3'>
                            {data?.description}
                          </p>
                          <div className='flex items-center flex-wrap '>
                            <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                              Learn More
                              <svg
                                className='w-4 h-4 ml-2'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path d='M5 12h14'></path>
                                <path d='M12 5l7 7-7 7'></path>
                              </svg>
                            </a>
                            <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                              <svg
                                className='w-4 h-4 mr-1'
                                stroke='currentColor'
                                strokeWidth='2'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                viewBox='0 0 24 24'
                              >
                                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                                <circle cx='12' cy='12' r='3'></circle>
                              </svg>
                              1.2K
                            </span>
                            <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                              <svg
                                className='w-4 h-4 mr-1'
                                stroke='currentColor'
                                strokeWidth='2'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                viewBox='0 0 24 24'
                              >
                                <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
        
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feature15;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const res = await axios.get('http://localhost:4000/api/v1/products?&page=1', {
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Credentials': true,
    },
  });

  const data = await res.data.products;
  return { props: { userData: data } };
};

import React, { useState } from 'react';

const SearchBar = ({ fetchData }) => {
  const [tokenAddreses, setTokenAddreses] = useState('');

  const handleInputChange = (event) => {
    setTokenAddreses(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(tokenAddreses);
    setTokenAddreses('');
  };

  return (
    <form className='relative w-full' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border rounded w-full py-2 px-4 pr-12 focus:outline-none focus:ring focus:border-blue-300'
        placeholder='Search...'
        value={tokenAddreses}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 15l4-4m0 0l-4-4m4 4H4'
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;

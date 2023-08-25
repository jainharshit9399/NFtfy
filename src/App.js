import React, { useState } from 'react';
import img1 from './Components/img3.jpg';
import { FiCodesandbox } from 'react-icons/fi';
import { FiCopy } from 'react-icons/fi';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Card from './Components/card';
import SearchBar from './Components/searchbar';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [method, setMethod] = useState('tokenSearch');

  const fetchData = async (searchQuery) => {
    let url = `https://api.dexscreener.com/latest/dex/tokens/${searchQuery}`;
    if (method === 'pairSearch')
      url = `https://api.dexscreener.com/latest/dex/search/?q=${searchQuery}`;
    try {
      const response = await axios.get(url);
      const pairs = response.data.pairs;
      if (method == 'tokenSearch') {
        pairs.sort((a, b) => b.priceUsd - a.priceUsd);
        const reqPairs = pairs.slice(0, 10);

        setData(reqPairs);
      } else setData(pairs);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative w-[1512px] h-[982px] h-screen flex z-0'>
      <img
        src={img1}
        alt='img'
        className='absolute object-fill w-[1512px] h-screen z-1'
      ></img>
      <div className='absolute w-[288px] h-[982px] bg-[#292929] rounded-tr-[30px] z-2'>
        <div className='flex items-center p-[30px] pb-[10px]'>
          <FiCodesandbox className='text-white text-[25.33px]' />
          <h1 className='pl-[30px] text-white text-[40px]'>NFtfy</h1>
        </div>
        <div
          className={`flex items-center pl-[40px] text-white p-[20px] cursor-pointer ${
            method === 'tokenSearch' ? 'bg-[#F30050]' : 'bg-[#292929]'
          }`}
          onClick={() => {
            setMethod('tokenSearch');
            setData([]);
          }}
        >
          <FiCopy className='text-[20px]' />
          <h1 className='text-[20px] pl-[30px]'>Token Address</h1>
        </div>
        <div
          className={`flex items-center pl-[40px] text-white p-[20px] cursor-pointer ${
            method === 'pairSearch' ? 'bg-[#F30050]' : 'bg-[#292929]'
          }`}
          onClick={() => {
            setMethod('pairSearch');
            setData([]);
          }}
        >
          <FiCopy className='text-[20px]' />
          <h1 className='text-[20px] pl-[30px]'>Pair Address</h1>
        </div>
        <div className='flex absolute bottom-[70px] left-[20px] items-center justify-center'>
          <div className='p-[10px]'>
            <FaFacebookSquare className='text-[25px] text-[#F30050]' />
          </div>
          <div className='p-[10px]'>
            <BsLinkedin className='text-[21px] text-[#F30050]' />
          </div>
          <div className='p-[10px]'>
            <FaTwitterSquare className='text-[25px] text-[#F30050]' />
          </div>
        </div>
      </div>
      <h1 className='absolute left-[330px] top-[130px] text-[30px] text-[white]'>
        {method === 'tokenSearch'
          ? 'Token Search Results'
          : 'Pair Search Results'}
      </h1>
      <div className='absolute left-[330px] top-[200px]'>
        <div className='p-10'>
          <SearchBar fetchData={fetchData} />
        </div>

        {data.map((pair, index) => (
          <Card key={index} pairData={pair} />
        ))}
      </div>
      <div className='absolute h-[50px] w-[100%] bg-[#F30050] top-[932px] z-3'></div>
    </div>
  );
};

export default App;

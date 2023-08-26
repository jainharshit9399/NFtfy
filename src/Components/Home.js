import React from 'react';
import Card from './Card';
import SearchBar from './Searchbar';
import axios from 'axios';

const Home = ({ method, data, setData }) => {
  const fetchData = async (searchQuery) => {
    let url = `https://api.dexscreener.com/latest/dex/tokens/${searchQuery}`;
    if (method === 'pairSearch')
      url = `https://api.dexscreener.com/latest/dex/search/?q=${searchQuery}`;
    try {
      const response = await axios.get(url);
      const pairs = response.data.pairs;
      if (method === 'tokenSearch') {
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
    <div>
      <h1 className='mt-[10px] text-[30px] text-[white] text-2xl font-semibold mb-4'>
        {method === 'tokenSearch'
          ? 'Token Search Results'
          : 'Pair Search Results'}
      </h1>
      <div className='py-4'>
        <SearchBar fetchData={fetchData} />
      </div>
      <div className='flex flex-wrap'>
        {data.map((pair, index) => (
          <Card key={index} pairData={pair} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

const Card = ({ pairData }) => {
  const baseToken = pairData.baseToken;
  const quoteToken = pairData.quoteToken;

  return (
    <div className='flex flex-wrap'>
      <div className='mr-[15px] mb-[20px] w-[275px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'>
        <h1 className=' pb-[10px]'>Basic Info</h1>
        <div className='flex items-center] text-[14px]'>
          <div className='pr-[40px] leading-[25px]'>
            <ul>
              <li>Pair Created at</li>
              <li>Symbol</li>
              <li>Dex ID</li>
              <li>Pair Address</li>
            </ul>
          </div>
          <div className='pr-[20px] leading-[25px]'>
            <ul>
              <li>{baseToken.name}</li>
              <li>{baseToken.symbol}</li>
              <li>
                {pairData.dexId.length > 15
                  ? pairData.dexId.slice(0, 7)
                  : pairData.dexId}
              </li>
              <li>{pairData.pairAddress.slice(0, 7)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mr-[15px] mb-[20px] w-[275px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'>
        <h1 className=' pb-[10px]'>Base Token</h1>
        <div className='flex items-center] text-[14px]'>
          <div className='pr-[40px] leading-[25px]'>
            <ul>
              <li>Name</li>
              <li>Symbol</li>
              <li>Address</li>
            </ul>
          </div>
          <div className='pr-[20px] leading-[25px]'>
            <ul>
              <li>{baseToken.name}</li>
              <li>{baseToken.symbol}</li>
              <li>{baseToken.address.slice(0, 7)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mr-[15px] mb-[20px] w-[275px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'>
        <h1 className=' pb-[10px]'>Quote Token</h1>
        <div className='flex items-center] text-[14px]'>
          <div className='pr-[40px] leading-[25px]'>
            <ul>
              <li>Name</li>
              <li>Symbol</li>
              <li>Address</li>
            </ul>
          </div>
          <div className='pr-[20px] leading-[25px]'>
            <ul>
              <li>{quoteToken.name}</li>
              <li>{quoteToken.symbol}</li>
              <li>{quoteToken.address.slice(0, 7)}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mb-[20px] w-[275px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'>
        <h1 className=' pb-[10px]'>Price</h1>
        <div className='flex items-center] text-[14px]'>
          <div className='pr-[40px] leading-[25px]'>
            <ul>
              <li>Pair Native</li>
              <li>Price USD</li>
            </ul>
          </div>
          <div className='pr-[20px] leading-[25px]'>
            <ul>
              <li>{pairData.priceNative}</li>
              <li>{pairData.priceUsd}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

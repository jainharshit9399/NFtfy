import React from 'react'

export default function vertical(props) {
  return (
    <div className='flex'>
        <div className='mr-[10px] w-[280px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'> 
            <h1 className=' pb-[10px]'>Basic Info</h1>
            <div className='flex items-center] text-[14px]'>
              <div className='pr-[40px] leading-[25px]'>
                <ul>
                  <li>Pair Created</li>
                  <li>Symbol</li>
                  <li>Dex ID</li>
                  <li>Pair Address</li>
                </ul>
              </div>
              <div className='pr-[20px] leading-[25px]'>
                <ul>
                  <li>Etherium</li>
                  <li>ETH</li>
                  <li>#7890</li>
                  <li>#6754</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='mr-[10px] w-[280px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'> 
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
                  <li>Etherium</li>
                  <li>ETH</li>
                  <li>#7890</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='mr-[10px] w-[280px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'> 
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
                  <li>Etherium</li>
                  <li>ETH</li>
                  <li>#7890</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='w-[280px] h-[188px] bg-[#390554] pl-[35px]  pt-[25px] text-[white] rounded-[10px]'> 
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
                  <li>ETH 7.00</li>
                  <li>1.8m</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import { FiCodesandbox } from 'react-icons/fi';
import { FiCopy } from 'react-icons/fi';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Sidebar = ({ method, setMethod, setData, showSidebar }) => {
  return (
    <div
      className={`md:w-1/5 ${
        showSidebar ? 'block w-full' : 'hidden'
      } md:block bg-[#292929] rounded-tr-[30px]`}
    >
      <div>
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
  );
};

export default Sidebar;

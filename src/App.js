import React, { useState } from 'react';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import { FaBars } from 'react-icons/fa';

const App = () => {
  const [data, setData] = useState([]);
  const [method, setMethod] = useState('tokenSearch');
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div
      className='flex min-h-screen bg-cover bg-no-repeat bg-fixed relative'
      style={{ backgroundImage: `url("img3.jpg")` }}
    >
      <Sidebar
        method={method}
        setMethod={setMethod}
        setData={setData}
        showSidebar={showSidebar}
      />
      <div className='md:w-4/5 p-8'>
        <Home
          method={method}
          data={data}
          setData={setData}
          showSidebar={showSidebar}
        />
      </div>
      <div className='absolute h-[50px] w-[100%] bg-[#F30050] bottom-0 z-3'></div>
      <div className='md:hidden fixed top-12 right-4 z-50'>
        <button
          onClick={handleSidebarToggle}
          className='bg-gray-300 p-2 rounded-md'
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default App;

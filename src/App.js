// import React from 'react'
import img1 from "./Components/img3.jpg";
import {FiCodesandbox} from "react-icons/fi";
import {FiCopy} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import Card from "./Components/vertical";
function App() {
  return (
    <div className="relative max-w-[100%] h-screen flex z-0">
      <img src={img1} alt="img" className="absolute object-fill w-[100%] h-screen z-1"></img>
      <div className="absolute w-[288px] h-screen bg-[#292929] rounded-tr-[30px] z-2" > 
        <div className="flex items-center p-[30px] pb-[10px]">
          <FiCodesandbox className="text-white text-[25.33px]"/>
          <h1 className="pl-[30px] text-white text-[40px]">NFtfy</h1>
        </div>
        <div className="flex items-center pl-[40px] text-white hover:bg-[#F30050] p-[20px]">
          <FiCopy className="text-[20px]"/>
          <h1 className="text-[20px] pl-[30px]">Token Address</h1>
        </div>
        <div className="flex items-center pl-[40px] text-white hover:bg-[#F30050] p-[20px]">
          <FiCopy className="text-[20px]"/>
          <h1 className="text-[20px] pl-[30px]">Pair Address</h1>
        </div>
        <div className="flex absolute bottom-[70px] left-[20px] items-center justify-center">
          <div className="p-[10px]">
            <FaFacebookSquare className="text-[25px] text-[#F30050]"/>
          </div>
          <div className="p-[10px]">
            <BsLinkedin className="text-[21px] text-[#F30050]"/>
          </div>
          <div className="p-[10px]">
            <FaTwitterSquare className="text-[25px] text-[#F30050]"/>
          </div>
        </div>
      </div>
      <div className="absolute left-[400px]">
          <Card/>    
      </div>
      <div className="absolute h-[50px] w-[100%] bg-[#F30050] bottom-[0px] z-3"></div>
    </div>
  );
}

export default App;

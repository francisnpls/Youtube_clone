import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menu, logo, avatar } from '../assets';
import { SearchBar } from './index';
import { sideAvatar } from '../utils/constant';

const Navbar = () => {
  const [text, setText] = useState('');

  return (
    <nav className="z-50 sticky top-0 bg-white">
      <div className="pl-6 pr-[50px] py-2 flex justify-between">
        <div className="flex gap-7 justify-center items-center">
          <img src={menu} alt="menu" className="w-[20px] h-[20px] cursor-pointer"/>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] h-[25px] cursor-pointer"/>
          </Link>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <SearchBar/>
          <button className="flex justify-center items-center">
            <i className="fa-solid fa-microphone text-[18px] bg-[#f0f0f0] h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#e4e4e4]" 
            onMouseOver={() => setText(avatar.text)}
            onMouseOut={() => setText('')}></i>
            <p className="absolute top-[55px] p-1 px-2 py-2 bg-[#00000079] text-[12px] text-white rounded-[5px]"
              style={{
                visibility: text === avatar.text ? 'visible' : 'hidden',
            }}>
              Search with your voice
            </p>
          </button>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {sideAvatar.map((avatar) => (
            <div key={avatar.id} className="h-[40px] w-[40px] hover:bg-[#e4e4e4] rounded-full flex justify-center items-center" 
            onMouseOver={() => setText(avatar.text)}
            onMouseOut={() => setText('')}
            >
              <button className='flex relative'>
                <img 
                  src={avatar.icon} 
                  alt={avatar.id} 
                  className="w-[20px]"                
                />
                {avatar.noti && (
                  <div className='w-[15px] h-[15px] bg-[#cc0000] rounded-full flex justify-center items-center absolute right-[-5px] top-[-3px]'>
                    <span className="text-[10px] font-medium text-white ">
                      {avatar.noti}
                    </span>
                  </div>
                )}
              </button>
              <p className="absolute top-[55px] p-1 px-2 py-2 bg-[#0000008e] text-[12px] text-white rounded-[5px]"
              style={{
                visibility: text === avatar.text ? 'visible' : 'hidden',
              }}>
                {avatar.text}
              </p>
            </div>
          ))}
          <button key={avatar.id} className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <img src={avatar} alt="avatar" className="w-[30px] rounded-full"/>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
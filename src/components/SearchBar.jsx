import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { magnify } from '../assets';


const SearchBar = () => {
  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchText) {
      navigate(`search/${searchText}`)
      setSearchText('')
    }
  } 

  return (
    <div className='flex'>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder='Search'
          className="border-[1px] border-[#c3c3c3] w-[500px] px-4 py-[7px] rounded-tl-[30px] rounded-bl-[30px] focus:outline-none focus:border-[#0f52e3]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type='submit'
          className='flex justify-center items-center px-[20px] border-[1px] border-l-[0] border-[#c3c3c3] rounded-tr-[30px] rounded-br-[30px] bg-[#f8f8f8] hover:bg-[#f0f0f0] duration-[.3s] ease-in-out'
        >
          <img src={magnify} alt="search" />
        </button>
      </form>
    </div>
    
    
  )
}

export default SearchBar
import React from 'react'
import { Categories } from '../utils/constant'

const TopBar = ({ selectedText, setSelectedText }) => {


  return (
    <div className="sticky top-0 p-[10px] overflow-auto">
      <div className="flex gap-5">
        {Categories.map((category) => (
          <button 
          key={category}
          className="py-[3px] px-[10px] bg-[#f6f6f6] hover:bg-[#e8e8e8] rounded-[5px] text-[14px] font-bold duration-[.3s] ease-in-out" 
          onClick={() => setSelectedText(category)}
          style={{
            background: category === selectedText && '#0D0C0C',
            color: category === selectedText && 'white'
          }}> 
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TopBar

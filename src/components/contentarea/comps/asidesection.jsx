import React from "react";

// Images
import user from '../../../assets/user.png'

const AsideSection = (props) => {
    return (
      <div className="aside-section mb-10">
        <div className='flex items-center justify-between w-full mb-5'>
          <span className='uppercase text-sm font-semibold'>{props.title}</span>
          <span className='text-gray-300'>All</span>
        </div>
        <ul>
          {
            props.list.map((item) => {
              const load = Math.floor(Math.random() * (1 - 0 + 1)) + 0
              return <li key={item} className='w-full flex justify-between mb-5 cursor-pointer'>
                <div className='inline'>
                  <img className='profile' src={user} alt="user" />
                  <span className='opacity-60'>{item}</span>
                </div> {load ?
                  <div className='bg-[#d3d8f870] p-1 rounded-md text-sm font-semibold flex items-center justify-center'>
                    <span className='h-[15px] text-xs font-semibold'>{Math.floor(Math.random() * (200 - 100 + 1)) + 100}</span>
                  </div> : ''}
              </li>
            })
          }
        </ul>
      </div>
    )
  }

  export default AsideSection
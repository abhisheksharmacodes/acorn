import React, { useContext, useState, useRef, useEffect } from 'react'
import '../App.css'

import MyContext from '../context'

// Images
import logo from '../assets/logo.png'
import user from '../assets/user.png'

// Icons
import all from '../assets/icons/all.svg'
import popular from '../assets/icons/popular.svg'
import brightness from '../assets/icons/brightness.svg'
import home from '../assets/icons/home.svg'
import message from '../assets/icons/message.svg'
import notify from '../assets/icons/notify.svg'
import lens from '../assets/icons/search.svg'

const Header = () => {

    const [searchState, foundState] = useContext(MyContext)
    const { search, setSearch } = searchState

    const searchRef = useRef(null)

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            setSearch(searchRef.current.value)
        }
    }

    return (
        <header className='flex items-centerflex-row justify-between w-full m-0 px-8 py-4 bg-white'>
            <div className="nav-left flex items-center gap-6">
                <img src={brightness} className='h-6 w-6  cursor-pointer' alt="brightness" />
                <img src={logo} alt="Reddit" className="logo h-8" />
            </div>
            <div className="nav-mid flex items-center gap-8">
                <nav className="nav-links flex items-center">
                    <ul className='flex items-center gap-7'>
                        <li className='flex items-start justify-items-end gap-3 cursor-pointer'>
                            <img src={home} className='icons' alt="home" />
                            <a href="#" className='flex items-center'>Home</a>
                        </li>
                        <li className='flex items-start justify-items-end gap-3 cursor-pointer'>
                            <img src={popular} className='icons' alt="popular" />
                            <a href="#" className='flex items-center active'>Popular</a>
                        </li>
                        <li className='flex items-start justify-items-end gap-3 cursor-pointer'>
                            <img src={all} className='icons' alt="all" />
                            <a href="#" className='flex items-center'>All</a>
                        </li>
                    </ul>
                </nav>
                <div className='bg-gray-100 rounded-lg p-3 px-4 flex gap-3 items-center justify-center'>
                    <img src={lens} className='h-5 opacity-15' alt="all" />
                    <input ref={searchRef} onKeyDown={handleInput} type="text" placeholder="Find community or post" />
                </div>
                <button className="create-post primary_button">Create Post</button>
            </div>
            <div className="nav-right flex items-center gap-6">
                <img src={notify} className='icons' alt="notify" />
                <img src={message} className='icons' alt="message" />
                <div className='flex items-center justify-center gap-3 cursor-pointer'>
                    <img src={user} className='h-7 rounded-full' alt="user" />
                    <div className='border-2 border-l-0 border-b-0 border-[#333333a0] h-2 aspect-square rotate-[135deg]'></div>
                </div>
            </div>
        </header>
    )
}

export default Header
import React, { useRef, useEffect, useState } from 'react'
import './App.css'

// Images
import logo from './assets/logo.png'
import user from './assets/user.jpg'
import thumbnail from './assets/thumbnail.jpg'
import ad from './assets/ad.png'

// Icons
import all from './assets/icons/all.svg'
import popular from './assets/icons/popular.svg'
import brightness from './assets/icons/brightness.svg'
import home from './assets/icons/home.svg'
import message from './assets/icons/message.svg'
import more from './assets/icons/more.svg'
import notify from './assets/icons/notify.svg'
import share from './assets/icons/share.svg'

function App() {

  const selectRef = useRef(null)
  const [isOpen,setIsOpen] = useState(false)

  useEffect(() => {
    const handleFocus = () => {
      setIsOpen(true);
    };

    const handleBlur = () => {
      setIsOpen(false);
    };

    if (selectRef.current) {
      selectRef.current.addEventListener('focus', handleFocus);
      selectRef.current.addEventListener('blur', handleBlur);
    }

    return () => {
      if (selectRef.current) {
        selectRef.current.removeEventListener('focus', handleFocus);
        selectRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  const AsideSection = (props) => {
    return (
      <div className="aside-section mb-10">
        <div className='flex items-center justify-between w-full mb-5'>
          <span className='uppercase text-sm font-semibold'>{props.title}</span>
          <span className='text-gray-400'>All</span>
        </div>
        <ul>
          {
            props.list.map((item) => <li key={item} className='w-full flex justify-between mb-5 cursor-pointer'>
              <div className='inline'>
                <img className='profile' src={user} alt="user" />
                <span className='opacity-60'>{item}</span>
              </div>
              <div className='bg-[#d3d8f870] p-1 rounded-md text-sm font-semibold flex items-center justify-center'>
                <span style={{ height: '15px' }} className='text-xs font-semibold'>{Math.floor(Math.random() * (200 - 100 + 1)) + 100}</span>
              </div>
            </li>)
          }
        </ul>
      </div>
    )
  }

  const Post = (props) => {
    return (
      <div className='w-full flex gap-6 border border-gray-200 rounded-lg h-32 cursor-pointer'>
        <div className='flex p-4 gap-6'>
          <img className='h-full rounded-lg' src={thumbnail} alt="thumbnail" />
          <div className='flex-grow flex flex-col justify-between'>
            <h1 className='text-left text-lg leading-6'>{props.title}</h1>
            <div className='flex justify-between text-sm text-gray-500'>
              <div>
                <span>Posted by</span>
                <img className='h-5 rounded-full inline mr-2 ml-2' src={user} alt="" />
                <span>Abhishek Sharma</span>
              </div>
              <span className='text-gray-400 opacity-75'>{props.time}</span>
            </div>
          </div>
          <div className='w-40 flex justify-between flex-col py-2 mx-4'>
            <div className='flex gap-2 text-sm text-gray-500'>
              <img src={notify} className='small_icons' alt="notify" />
              <span>{Math.floor(Math.random() * (500 - 100 + 1)) + 100}</span>
              <span>Comments</span>
            </div>
            <div className='flex gap-2 text-sm text-gray-500'>
              <img src={share} className='small_icons' alt="share" />
              <span>{Math.floor(Math.random() * (500 - 100 + 1)) + 100}</span>
              <span>Shares</span>
            </div>
            <div className='flex gap-2 text-sm text-gray-500'>
              <img src={more} className='small_icons scale-x-75' alt="more" />
              <span>More</span>
            </div>
          </div>
        </div>
        <div className='p-4 border-l border-gray-200 box-border flex gap-2 h-full flex-col'>
          <div className='bg-[#ff410110] p-4 py-2 rounded-lg'>
            <div className='border-2 translate-y-1 border-l-0 border-b-0 border-[#FF4201] h-3 aspect-square -rotate-45'></div>
          </div>
          <span className='text-sm'>{Math.floor(Math.random() * (500 - 100 + 1)) + 100}K</span>
          <div className='bg-[#ff410110] p-4 py-2 rounded-lg'>
            <div className='border-2 translate-y-1 border-l-0 border-b-0 border-[#FF4201] h-3 aspect-square' style={{ transform: 'rotate(135deg)' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className='flex items-centerflex-row justify-between w-full m-0 px-8 py-4 bg-white'>
        <div className="nav-left flex items-center gap-6">
          <img src={brightness} className='h-6 w-6  cursor-pointer' alt="brightness" />
          <img src={logo} alt="Reddit" className="logo h-8" />
        </div>
        <div className="nav-mid flex items-center gap-8">
          <nav className="nav-links flex items-center">
            <ul className='flex items-center gap-8'>
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
          <input className='input-text' type="text" placeholder="Find community or post" />
          <button className="create-post primary_button">Create Post</button>
        </div>
        <div className="nav-right flex items-center gap-6">
          <img src={notify} className='icons' alt="notify" />
          <img src={message} className='icons' alt="message" />
          <div className='flex items-center justify-center gap-3 cursor-pointer'>
            <img src={user} className='h-7 rounded-full' alt="user" />
            <div className='border-2 translate-y-1 border-l-0 border-b-0 border-[#333333a0] h-2 aspect-square' style={{ transform: 'rotate(135deg)' }}></div>
          </div>
        </div>
      </header>

      <main className='flex justify-between w-full'>
        <aside id="sidebar" className="flex flex-col gap-4 w-56 m-4">
          <div className="filter-section">
            <select ref={selectRef} className={isOpen ? 'arrow_up' : 'arrow_down'}>
              <option value="all">Filter by</option>
              <option value="hot">Hot</option>
              <option value="new">New</option>
              <option value="top">Top</option>
            </select>
          </div>
          <div className="sections p-2">
            <AsideSection title="Favorites" list={["r/funymoro", "r/breadkingnews", "r/lovestory", "r/gamingfun"]} />
            <AsideSection title="Reddit feeds" list={["r/moviow", "r/gaming", "r/pics", "r/gifs"]} />
            <AsideSection title="Community" list={["r/funymoro", "r/breadkingnews", "r/lovestory", "r/gamingfun"]} />
          </div>
        </aside>
        <div className='flex gap-1 '>
          <div id="content" className='flex gap-4 flex-col items-start justify-start bg-white flex-grow m-4 rounded-lg p-4'>
            <div className='flex justify-between w-full px-4'>
              <span className='font-semibold'>Popular</span>
              <div className="text-gray-500 text-sm flex gap-6 items-center">
                <span className='selectRef text-sm'>Hot</span>
                <span>New</span>
                <span>Controversial</span>
                <span>Rising</span>
                <span>Top</span>
              </div>
            </div>
            <div className="posts w-full flex gap-4 flex-col max-w-4xl">
              <Post title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." time="July 15, 2024 6:44 PM" />
              <Post title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." time="July 15, 2024 6:44 PM" />
              <Post title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." time="July 15, 2024 6:44 PM" />
            </div>
          </div>
          <aside id="sidebar" className="flex flex-col gap-4 w-56 mt-4">
            <img className='rounded-md' src={ad} alt="ad" />
            <div className='bg-white p-4 items-center justify-center flex flex-col gap-4 rounded-md'>
              <img src={logo} alt="Reddit" className="logo h-8" />
              <span className='text-sm'>Advertise on Reddit</span>
              <button className="create-post secondary_button">Get Started</button>
            </div>
          </aside>
        </div>

      </main>
    </>
  )
}

export default App

import React, { useEffect, useState, useContext } from "react"

import MyContext from '../../context'

// Components
import AsideSection from "./comps/asidesection"
import Post from "./comps/post"

// Images
import ad from '../../assets/ad.png'
import ad2 from '../../assets/ad2.png'

const ContentArea = () => {

  const [searchState] = useContext(MyContext)
  const { search, setSearch } = searchState

  const [found, setFound] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (search) {
      fetch(`https://www.reddit.com/search.json?q=${search}`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
        .then(data => {
          setPosts(data.data.children)
          setFound(true)
        })
        .catch(error => {
          setFound(false)
        });
    } else {
      fetch(`https://www.reddit.com/r/gaming/new/.json?limit=10`).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
        .then(data => {
          setPosts(data.data.children)
          setFound(true)
        })
        .catch(error => {
          setFound(false)
        });
    }

  }, [search])

  return (
    <main className='flex justify-between w-full bg-gray-100 mx-2'>
      <aside id="sidebar" className="flex flex-col gap-4 w-56 m-4">
        <div className="filter-section">
          <select>
            <option value="all">Filter by</option>
            <option value="hot">Favorites</option>
            <option value="new">Reddit feeds</option>
            <option value="top">Community</option>
          </select>
        </div>
        <div className="sections p-2">
          <AsideSection title="Favorites" list={["r/funymoro", "r/breadkingnews", "r/lovestory", "r/gamingfun"]} />
          <AsideSection title="Reddit feeds" list={["r/moviow", "r/gaming", "r/pics", "r/gifs"]} />
          <AsideSection title="Community" list={["r/funymoro", "r/breadkingnews", "r/lovestory", "r/gamingfun"]} />
        </div>
      </aside>
      <div className='flex gap-1 flex-grow'>
        <div id="content" className='flex gap-4 flex-col bg-white flex-grow m-4 rounded-lg p-4'>
          {found ? <><div className='flex justify-between w-full px-4'>
            <span className='font-semibold'>Popular</span>
            <div className="text-gray-500 text-sm flex gap-6 items-center">
              <span className='selected text-sm'>Hot</span>
              <span>New</span>
              <span>Controversial</span>
              <span>Rising</span>
              <span>Top</span>
            </div>
          </div>
            <div className="posts w-full flex gap-4 flex-col max-w-4xl">
              {posts.map((post, index) => (
                <Post key={index} url={post.data.permalink} title={post.data.title} ups={post.data.ups} comments={post.data.num_comments} author={post.data.author} time={post.time} />
              ))}
            </div></> : `Couldn't find anything. Try something else.`}
        </div>
        <aside id="sidebar" className="flex flex-col gap-4 w-56 mt-4">
          <img className='rounded-md' src={ad} alt="ad" />
          <img className='rounded-md' src={ad2} alt="ad2" />
        </aside>
      </div>
    </main>
  )
}

export default ContentArea
import React from "react"

// Images
import user from '../../../assets/user.png'

// Icons
import more from '../../../assets/icons/more.svg'
import notify from '../../../assets/icons/notify.svg'
import share from '../../../assets/icons/share.svg'
import thumbnail from '../../../assets/thumbnail.jpg'

const Post = props => {

    const utcToFormattedDate = utcTimestamp => {

        const date = new Date(utcTimestamp * 1000);

        const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
        const formattedDate = date.toLocaleString('en-US', options);

        return `${formattedDate}`;

    }

    const numberFormatter = num => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        } else {
            return num;
        }
    }

    const ellipsed = str => (str.length > 120) ? str.substring(0, 117) + '...' : str

    return (
        <div className='w-full flex gap-6 border border-gray-200 rounded-lg h-32'>
            <div className='flex p-4 gap-6'>
                <img className='h-full rounded-lg' src={thumbnail} alt="thumbnail" />
                <div className='min-w-[420px] flex-grow max-w-full flex flex-col justify-between'>
                    <a href={'https://www.reddit.com/' + props.url} target="_blank"><h1 className='text-left text-lg leading-6'>{ellipsed(props.title)}</h1></a>
                    <div className='flex justify-between text-sm text-gray-500'>
                        <div>
                            <span className='text-[#33333390]'>Posted by</span>
                            <img className='h-5 rounded-full inline mr-2 ml-2' src={user} alt="" />
                            <span className='text-[#333333a2]'>{props.author}</span>
                        </div>
                        <span className='text-gray-400 opacity-75'>{utcToFormattedDate(props.time)}</span>
                    </div>
                </div>
                <div className='w-40 flex justify-between flex-col py-0 mx-4'>
                    <div className='flex gap-2 text-sm'>
                        <img src={notify} className='small_icons' alt="notify" />
                        <span>{numberFormatter(props.comments)}</span>
                        <span className="text-gray-500">Comments</span>
                    </div>
                    <div className='flex gap-2 text-sm text-gray-400'>
                        <img src={share} className='small_icons' alt="share" />
                        <span>{Math.floor(Math.random() * (500 - 100 + 1)) + 100}</span>
                        <span className="text-gray-500">Shares</span>
                    </div>
                    <div className='flex gap-2 text-sm text-gray-400'>
                        <img src={more} className='small_icons scale-x-75' alt="more" />
                        <span className="text-gray-500">More</span>
                    </div>
                </div>
            </div>
            <div className='p-4 border-l border-gray-200 box-border flex gap-2 h-full flex-col'>
                <div className='bg-[#ff410110] p-4 py-2 rounded-md cursor-pointer'>
                    <div className='border-2 m-auto translate-y-[2px] border-l-0 border-b-0 border-[#FF4201] h-[9px] aspect-square -rotate-45'></div>
                </div>
                <span className='text-sm'>{numberFormatter(props.ups)}</span>
                <div className='bg-[#ff410110] p-5 py-2 rounded-md cursor-pointer'>
                    <div className='border-2 m-auto -translate-y-[2px] border-l-0 border-b-0 border-[#FF4201] h-[9px] aspect-square rotate-[135deg]'></div>
                </div>
            </div>
        </div>
    )
}

export default Post
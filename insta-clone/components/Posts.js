import React from 'react';
import Post from './Post';

const posts = [
    {
        id: '1',
        username: 'shashanksharda',
        userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
        img: '/logos/BeautyPlus_20200120115251128_save.jpg',
        caption: 'high tides and good vibes',
    },
    {
        id: '2',
        username: 'shashanksharda',
        userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
        img: '/logos/BeautyPlus_20200120115251128_save.jpg',
        caption: 'high tides and good vibes',
    },
    {
        id: '3',
        username: 'shashanksharda',
        userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
        img: '/logos/BeautyPlus_20200120115251128_save.jpg',
        caption: 'high tides and good vibes',
    },
    {
        id: '4',
        username: 'shashanksharda',
        userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
        img: '/logos/BeautyPlus_20200120115251128_save.jpg',
        caption: 'high tides and good vibes',
    },
    {
        id: '5',
        username: 'shashanksharda',
        userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
        img: '/logos/BeautyPlus_20200120115251128_save.jpg',
        caption: 'high tides and good vibes',
    },

]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post key={post.id}
                        id={post.id}
                        username={post.username}
                        userimg={post.userimg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
            
        </div>
    )
}

export default Posts

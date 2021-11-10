import React, {useState, useEffect} from 'react';
import Post from './Post';
import {onSnapshot, collection, query, orderBy} from "firebase/firestore";
import { db } from '../firebase';
import { useSession } from 'next-auth/react';

// const posts = [
//     {
//         id: '1',
//         username: 'shashanksharda',
//         userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         img: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         caption: 'high tides and good vibes',
//     },
//     {
//         id: '2',
//         username: 'shashanksharda',
//         userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         img: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         caption: 'high tides and good vibes',
//     },
//     {
//         id: '3',
//         username: 'shashanksharda',
//         userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         img: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         caption: 'high tides and good vibes',
//     },
//     {
//         id: '4',
//         username: 'shashanksharda',
//         userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         img: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         caption: 'high tides and good vibes',
//     },
//     {
//         id: '5',
//         username: 'shashanksharda',
//         userimg: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         img: '/logos/BeautyPlus_20200120115251128_save.jpg',
//         caption: 'high tides and good vibes',
//     },

// ]

function Posts() {

    const [posts, setPosts] = useState([]);
    const {data:session} = useSession();
    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });

        
    },[db]);
    return (
        <div>
            {
                posts.map((post) => (
                    // <Post key={post.id}
                    //     id={post.id}
                    //     username={post.username}
                    //     userimg={post.userimg}
                    //     img={post.img}
                    //     caption={post.caption}
                    // />
                    <Post key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userimg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption} 
                    />
                ))
            }
            
        </div>
    )
}

export default Posts

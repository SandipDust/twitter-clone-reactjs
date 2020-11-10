import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';


function Feed() {
 

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts')
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) =>({id:doc.id, data: doc.data() } ))
        ))
    },[])
  
    return (
        <div className="feed">
            <div className="feed__width">
                     {/* Header */}
               <div className="feed__header">
                <h2>Home</h2>
               </div>
               

               {/* TweetBox */}
               <TweetBox/>

               {/* Post */}
               <FlipMove>
                  {posts.map((post) =>(
                    <Post
                    displayName={post.data.displayName}
                    username={post.data.username}
                    verified={true}
                    text={post.data.text}
                    image={post.data.image}
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    timestamp={post.data.timestamp}
                       />

               ))}

               </FlipMove>
              
            </div>
          
              
            
        </div>
    )
}

export default Feed;

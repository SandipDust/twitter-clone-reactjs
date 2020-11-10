import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import {useStateValue} from "./StateProvider";
import firebase from "firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [{user}, dispatch] =useStateValue();

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:user.displayName,
            username: user.displayName,
            verified:true,
            text: tweetMessage,
            image:tweetImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL
        });

        setTweetMessage("");
        setTweetImage("");
    }
    
    return (
       
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user.photoURL}/>
                    <input
                        onChange={e=>setTweetMessage(e.target.value)}
                        value={tweetMessage}
                    placeholder="What's happening?" type="text"/>
                    
                </div>
                <input 
                onChange={e=>setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox_imageInput" 
                placeholder="Enter image URL" 
                type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox;

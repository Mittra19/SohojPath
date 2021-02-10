import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import {config} from 'dotenv';
import ChatFeed from './ChatFeed';
const ChatWindow = () => {
    console.log(config.REACT_APP_CHATENGINEIO_PROJECTID)
    return ( 
        
        <ChatEngine
            height="100vh"
            projectID="b98b1b24-bbf3-4eab-b00a-fd24eceedfd3"
            userName="John"
            userSecret="123123"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            />
     );
}
 
export default ChatWindow;
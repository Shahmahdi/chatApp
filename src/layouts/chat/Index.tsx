import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
const { ChatManager, TokenProvider } = require('@pusher/chatkit-client');

const ChatLayoutComponent = (props: {
  userId: string
}) => {

  const [firstLoad, setFirstLoad] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [currentRoom, setCurrentRoom] = useState({users: []})
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log(`ChatLayoutComponent useEffect`)
    const chatManager = new ChatManager({
      instanceLocator: "v1:us1:2e9345f4-3477-47d0-b0ae-75a65d37d6f0",
      userId: props.userId,
      tokenProvider: new TokenProvider({
        url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2e9345f4-3477-47d0-b0ae-75a65d37d6f0/token"
      })
    });
    chatManager.connect()
      .then((currentUser: any) => {
        console.log(`currentUser: `, currentUser);
        setCurrentUser(currentUser);
        return currentUser.subscribeToRoom({
          roomId: "9106da59-05a9-4d8e-bdd9-78ec71266255",
          messageLimit: 100,
          hooks: {
            onMessage: (newMessage: any) => {
              setMessages([...messages, newMessage] as any);
            }
          }
        })
      })
      .then((currentRoom: any) => {
        setCurrentRoom(currentRoom);
        setUsers(currentRoom.users);
      }).catch((error: any) => console.log(error));
      setFirstLoad(false);
  }, [firstLoad])

  return (
    <div className="chatapp">
      <div>
        <h2 className="header">Let's Talk</h2>
        {console.log(`currentUser: `, currentUser)}
        {console.log(`currentRoom: `, currentRoom)}
        {console.log(`messages: `, messages)}
        {console.log(`users: `, users)}
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.id
  };
}

export const ChatLayout = connect(mapStateToProps, null)(ChatLayoutComponent);

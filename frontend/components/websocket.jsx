import { useContext, useEffect, useState } from 'react';
import { WebSocketContext } from '../contexts/websocket-context';

export var Websocket = () => {
  var socket = useContext(WebSocketContext);
  var [messages, setMessages] = useState([]);
  var [input, setInput] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('-> Connected!');
    });

    socket.on('onMessage', (data) => {
      console.log('-> message:', data);
      setMessages((m) => m.push(data));
      console.log('now messages:', messages);
    });

    return () => {
      console.log('Unregister Events...');
      socket.off('connect');
      socket.off('onMessage');
    };
  }, []);

  var handleMessageSend = () => {
    socket.emit('newMessage', input);
    setInput('');
  };

  return (
    <div className='chat'>
      <h1>Websocket Chat</h1>
      <form className="message-section">
        <label htmlFor="message" className="message-section__label">
          Message
        </label>
        <input
          name="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="message-section__input"
          type="text"
        />
        <button onClick={handleMessageSend} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

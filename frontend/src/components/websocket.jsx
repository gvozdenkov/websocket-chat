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

    socket.on('onMessage', (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      console.log('Unregister Events...');
      socket.off('connect');
      socket.off('onMessage');
    };
  }, []);

  var handleMessageSend = (e) => {
    e.preventDefault();
    socket.emit('newMessage', input);
    setInput('');
  };

  var messageList = messages.map((msg) => {
    var isSelfMessage = msg.from === socket.id;
    var cn = `chat-list__message ${
      isSelfMessage ? 'chat-list__message_self' : 'chat-list__message_other'
    }`;

    return (
      <li key={msg.messageId} className={cn}>
        {msg.message}
      </li>
    );
  });

  return (
    <div className="chat">
      <h1>Websocket Chat</h1>
      <ul className="chat-list">{messageList}</ul>
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
        <button onClick={handleMessageSend} type="submit" disabled={!input.length}>
          Send
        </button>
      </form>
    </div>
  );
};

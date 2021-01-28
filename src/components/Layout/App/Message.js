import React from 'react';

export default function  Message({ massage }) {
  return (
      <div className="message"
           style={ { alignSelf: massage.author === 'bot' ? 'flex-start' : 'flex-end' } }>
          <div>{ massage.text }</div>
          <div className="message-sender">{ massage.author }</div>
      </div>)
}

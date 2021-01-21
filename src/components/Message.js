import React from 'react';

export default function  Message({ massage }) {

 return (
     <>
     <div className="text" >{ massage.text }
     <span className="text-author"> { massage.author }</span>
     </div>
     </>)
}

import {useState } from 'react';

const Html = () => {
    const [text, setText] = useState("");
  return (
    <div>
      <input
      value={text}
      onChange={e =>setText(e.target.value)}
      placeholder="Введите поисковый запрос или URL"/>
      <div>{text}</div>
   
    </div>
  );
};

export default Html;

import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './CountStore';

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = event => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:{text}
    </div>
  );
};

export default CharacterCounter;

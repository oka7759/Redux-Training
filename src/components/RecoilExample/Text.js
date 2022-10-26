import React from 'react';
import { useRecoilState } from 'recoil';
import { fontSizeState } from './store';
import { fontSizeLabelState } from './store';

const Text = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <p style={{ fontSize }}>This text will increase in size too.</p>;
};

export default Text;

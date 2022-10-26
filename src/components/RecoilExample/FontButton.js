import React from 'react';
import { useRecoilState } from 'recoil';
import { fontSizeState } from './store';
import { useRecoilValue } from 'recoil';
import { fontSizeLabelState } from './store';

const FontButton = () => {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>
      <button
        onClick={() => setFontSize(size => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    </>
  );
};

export default FontButton;

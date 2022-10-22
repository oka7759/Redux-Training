import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementAmount,
  fatchincrement,
} from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          더하기
        </button>
        <button
          onClick={() => {
            dispatch(fatchincrement(2));
          }}
        >
          통신더하기
        </button>

        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          빼기
        </button>
        <button
          onClick={() => {
            dispatch(incrementAmount(5));
          }}
        >
          +5
        </button>
      </div>
    </div>
  );
};

export default Counter;

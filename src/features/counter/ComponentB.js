import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
} from './counterSlice';
// import styles from './Counter.module.css';

export function ComponentB() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(increment(value));
    },
    [dispatch],
  );

  return (
    <div>
      <div >
        {/* <span className={styles.value}>{count}</span> */}
      </div>
      <div >
        <input
          aria-label="Set increment amount"
          // value={incrementAmount}
          // onChange={(e) => setIncrementAmount(e.target.value)}
          value={count}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

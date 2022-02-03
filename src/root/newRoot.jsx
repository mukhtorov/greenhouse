import React, { useState, useCallback, useMemo } from 'react';
import { Controlled } from './controlled';
import UnControlled from './Uncontrolled';

export const Root = () => {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const fun = useMemo(() => {
    return [1, 2, 3];
  }, []);

  const func = useCallback((num) => {
    return [num + 1, num + 2, num + 3];
  }, []);

  return (
    <div>
      <h1>Optimization</h1>
      <Controlled func={func} />
      <hr />
      <UnControlled func={fun} />

      <h1>Counter: {counter}</h1>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Root;

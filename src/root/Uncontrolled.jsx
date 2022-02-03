import React, { useState, useRef, memo } from 'react';

export const UnControlled = ({ func }) => {
  // const [name, setName] = useState('');
  console.log('uncontrolled components');
  const inputRef = useRef('');
  console.log(func, 'useMemo');
  return (
    <div>
      <h1>Uncontrolled components</h1>
      <input
        ref={inputRef}
        type='text'
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => alert(inputRef.current.value)}>alert</button>
      {func.map((value) => {
        return <h1>{value}</h1>;
      })}
    </div>
  );
};

export default memo(UnControlled);

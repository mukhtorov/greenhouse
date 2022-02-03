import React, { useState, memo } from 'react';

export const Controlled = memo(({ func }) => {
  const [name, setName] = useState('');
  console.log('controlled components');
  console.log(func, 'useCallback');

  return (
    <div>
      <h1>Controlled components</h1>
      <h1>Name: {name}</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {func(5).map((value) => {
        return <h1>{value}</h1>;
      })}
    </div>
  );
});

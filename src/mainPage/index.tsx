import React from 'react';
import { useStore, useEvent } from 'effector-react';
import { $data, buttonClicked } from './models';

const MainPage = () => {
  const data = useStore($data);
  const handleClick = useEvent(buttonClicked);

  return (
    <div>
      <h1>Server Page</h1>
      <h2>Store state: {JSON.stringify(data)}</h2>
      <button onClick={handleClick}>click to change store state</button>
      <br />
      <br />
    </div>
  );
};

export default MainPage;

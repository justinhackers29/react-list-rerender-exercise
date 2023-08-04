import { useState } from 'react';
import './styles.css';
import Item from './Item';
import React from 'react';

const DEFAULT_VALUES = new Array(100).fill(0).map((x) => ({ value: '' }));

const App = () => {
  const [items, setItems] = useState(DEFAULT_VALUES);

  const onChangeHandler = React.useCallback((id, value) => {
    setItems(
      items.map((item, index) => {
        return index !== id ? item : { value: value };
      })
    );
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <Item
          key={index}
          id={index}
          value={item.value}
          onChange={onChangeHandler}
        />
      ))}
    </>
  );
};

export default App;

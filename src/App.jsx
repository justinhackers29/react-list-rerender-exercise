import { useState } from "react";
import "./styles.css";
import Item from "./Item";

const DEFAULT_VALUES = new Array(100).fill(0).map((x) => ({ value: "" }));

const App = () => {
  const [items, setItems] = useState(DEFAULT_VALUES);

  return (
    <>
      {items.map((item, index) => (
        <Item
          key={index}
          id={index}
          value={item.value}
          onChange={(id, value) =>
            setItems(
              items.map((item, index) => {
                return index !== id ? item : { value: value };
              })
            )
          }
        />
      ))}
    </>
  );
};

export default App;

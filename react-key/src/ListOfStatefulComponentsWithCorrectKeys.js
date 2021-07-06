import { useState } from 'react';
import { Item, getColor } from './Item';

const ChildItem = ({ value, onDelete, ...rest }) => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <Item style={{ backgroundColor: `${getColor(colorIndex)}` }} {...rest}>
      <span onClick={() => setColorIndex(colorIndex + 1)}>{value}</span>
      <button onClick={onDelete}>Delete</button>
    </Item>
  );
};

const generateId = (() => {
  let counter = 1;
  return () => `id_${++counter}`;
})();

export const ListOfStatefulComponentsWithCorrectKeys = () => {
  const [values, setValues] = useState(
    ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].map((value) => {
      return { value, id: generateId() };
    })
  );

  const del = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  return (
    <>
      {values.map((item, index) => (
        <ChildItem
          key={item.id}
          value={item.value}
          onDelete={() => del(index)}
        />
      ))}
    </>
  );
};

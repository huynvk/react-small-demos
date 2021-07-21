import { useState } from 'react';
import { getColor } from './utils';

export const ListOfStatelessComponents = () => {
  const [values, setValues] = useState([
    {
      name: 'Item 1',
      colorIndex: 0,
    },
    {
      name: 'Item 2',
      colorIndex: 0,
    },
    {
      name: 'Item 3',
      colorIndex: 0,
    },
    {
      name: 'Item 4',
      colorIndex: 0,
    },
    {
      name: 'Item 5',
      colorIndex: 0,
    },
  ]);

  const del = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const countClick = (index) => {
    const newValues = [...values];
    newValues[index].colorIndex++;
    setValues(newValues);
  };

  return (
    <>
      {values.map((value, index) => (
        <p
          key={index}
          style={{ backgroundColor: `${getColor(value.colorIndex)}` }}
        >
          <span onClick={() => countClick(index)}>{value.name}</span>
          <button onClick={() => del(index)}>Delete</button>
        </p>
      ))}
    </>
  );
};

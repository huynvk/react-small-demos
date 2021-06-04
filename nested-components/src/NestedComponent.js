import { useState } from 'react';

const SeparateComponent = () => {
  const [values, setValues] = useState(['', '']);

  const onChange = (value, index) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const Input = (props) => {
    return <input type='text' {...props} />;
  };

  return (
    <>
      {values.map((value, index) => (
        <Input
          key={index}
          value={value}
          onChange={(e) => onChange(e.target.value, index)}
        />
      ))}
      <button onClick={() => setValues([...values, ''])}>Add</button>
    </>
  );
};

export default SeparateComponent;

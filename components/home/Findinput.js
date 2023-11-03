import React from 'react';
import { Input } from '@ui-kitten/components';

const Findinput = () => {

  const [value, setValue] = React.useState('');

  return (
    <Input
      style={{backgroundColor: '#fbed50'}}
      placeholder='Найти песню'
      value={value}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

export default Findinput
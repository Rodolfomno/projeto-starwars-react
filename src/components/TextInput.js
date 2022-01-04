import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function TextInput() {
  const { name, setName } = useContext(planetsContext);
  return (
    <label htmlFor="name">
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
    </label>
  );
}

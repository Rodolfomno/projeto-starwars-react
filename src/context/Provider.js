/* eslint-disable react/jsx-first-prop-new-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import planetsAPI from '../services/services';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  async function getPlanetsList() {
    const allPlanetsList = await planetsAPI();
    const planetsList = allPlanetsList.results;
    setPlanets(planetsList);
  }

  const objetao = { planets,
    setPlanets,
    getPlanetsList,
    name,
    setName,
    type,
    setType,
    comparison,
    setComparison,
    value,
    setValue };

  return (
    <planetsContext.Provider value={ objetao }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

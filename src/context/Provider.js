import React, { useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import planetsAPI from '../services/services';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  async function getPlanetsList() {
    const allPlanetsList = await planetsAPI();
    const planetsList = allPlanetsList.results;
    setPlanets(planetsList);
  }

  return (
    <planetsContext.Provider value={ { planets, getPlanetsList, name, setName } }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

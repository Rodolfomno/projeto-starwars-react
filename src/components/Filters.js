import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

const column1 = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export default function Filters() {
  const { type, setType, comparison, setComparison,
    value, setValue, planets, setPlanets } = useContext(planetsContext);

  function handleClick() {
    if (comparison === 'maior que') {
      setPlanets(planets
        .filter((planet) => (Number(planet[type]) > value)));
    } else if (comparison === 'menor que') {
      setPlanets(planets
        .filter((planet) => (Number(planet[type]) < value)));
    } else {
      setPlanets(planets
        .filter((planet) => (Number(planet[type]) === Number(value))));
    }
  }
  return (
    <form>
      <label htmlFor="type">
        <select
          data-testid="column-filter"
          name="type"
          value={ type }
          onChange={ (e) => setType(e.target.value) }
        >
          { column1.map((sub, index) => (
            <option key={ index } value={ sub }>{sub}</option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value"
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        value="Filtar"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

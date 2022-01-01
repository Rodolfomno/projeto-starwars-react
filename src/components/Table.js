import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

function Table() {
  const { planets, getPlanetsList } = useContext(planetsContext);

  useEffect(() => {
    getPlanetsList();
  }, [getPlanetsList]);

  return (
    <table border="1">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {planets.map((planet) => TableRows(planet))}
      </tbody>
    </table>
  );
}

export default Table;

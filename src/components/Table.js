import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

export default function Table() {
  const { planets, getPlanetsList, name } = useContext(planetsContext);

  useEffect(() => {
    getPlanetsList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredByName = planets.filter((planet) => planet.name.includes(name));

  return (
    <table border="1">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {filteredByName && filteredByName.map((planet) => TableRows(planet))}
      </tbody>
    </table>
  );
}

import React from 'react';

const subTitles = ['Name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
  'gravity', 'terrain', 'surface_water', 'population',
  'films', 'created', 'edited', 'url'];

export default function TableHeader() {
  return (
    <tr>
      { subTitles.map((title, index) => (
        <th key={ index }>
          {title}
        </th>
      )) }
    </tr>
  );
}

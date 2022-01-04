import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import TextInput from './components/TextInput';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <TextInput />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;

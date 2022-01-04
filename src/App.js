import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import TextInput from './components/TextInput';

function App() {
  return (
    <Provider>
      <TextInput />
      <Table />
    </Provider>
  );
}

export default App;

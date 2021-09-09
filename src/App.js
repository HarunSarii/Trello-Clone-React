import React, { useState } from 'react'
import './App.css';
import store from './utils/store'
import List from './components/List/List'

function App() {
  const [data, setData] = useState(store);
  console.log('data:', data)
  return (
    <div >
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />

      })}
    </div>
  );
}

export default App;

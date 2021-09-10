import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css';
import store from './utils/store'
import List from './components/List/List'
import ContextApi from './utils/ContextApi';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}))
function App() {
  const [data, setData] = useState(store);
  console.log('data:', data)
  const classes = useStyle()
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    }
    console.log('uuid:', newCardId)
    console.log('title, listId:', title, listId)
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      }
    }
    setData(newState)
  };
  return (
    <ContextApi.Provider value={{ addMoreCard }}  >
      <div className={classes.root} >
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />

        })}
        <InputContainer />
      </div>
    </ContextApi.Provider>
  );
}

export default App;

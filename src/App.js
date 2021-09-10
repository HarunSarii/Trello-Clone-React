import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css';
import store from './utils/store'
import List from './components/List/List'
import ContextApi from './utils/ContextApi';
import InputContainer from './components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#AA4A44',
    overflowY: 'auto',
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

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      }
    }
    setData(newState);
  }

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      }
    }
    setData(newState)
  }
  return (
    <ContextApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}  >
      <DragDropContext >
        <div className={classes.root} >
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />

          })}
          <InputContainer type='list' />
        </div>
      </DragDropContext>
    </ContextApi.Provider>
  );
}

export default App;

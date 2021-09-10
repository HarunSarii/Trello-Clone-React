import React from 'react'
import { Paper, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';



const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: '300px',
        backgroundColor: '#e6dfdf',
        marginLeft: theme.spacing(1)
    },
    cardContainer: {
        marginTop: theme.spacing(4)
    }
}))

function List({ list }) {
    const classes = useStyle();
    console.log('lst:', list)
    return (
        <div>

            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} listId={list.id} />
                <Droppable droppable={list.id} >
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer} >
                            {list.cards.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <InputContainer listId={list.id} type='card' />

            </Paper>

        </div>
    )
}

export default List

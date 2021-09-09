import React from 'react'
import { Paper, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#e6dfdf',
        marginLeft: theme.spacing(1)
    }
}))

function List({ list }) {
    const classes = useStyle();
    console.log('lst:', list)
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} />
                {list.cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
                <InputContainer />

            </Paper>

        </div>
    )
}

export default List

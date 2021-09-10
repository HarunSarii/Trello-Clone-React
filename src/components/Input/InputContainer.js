import React, { useState } from 'react'
import { Collapse, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputCard from './InputCard';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        marginTop: theme.spacing(1)
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: '#e6dfdf',
        '&:hover': {
            backgroundColor: '#ACA7A7',
        }
    }
}))

function InputContainer({ listId, type }) {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)} >
                    <Typography>{type === 'card' ? '+ Add a Card' : '+Add another List'}</Typography>
                </Paper>
            </Collapse>
        </div>
    )
}

export default InputContainer

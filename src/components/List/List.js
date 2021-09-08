import React from 'react'
import { Paper, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Title from './Title';
import Card from './Card';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#e6dfdf',
        marginLeft: theme.spacing(1)
    }
}))

function List() {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title />
                <Card />
                <Card />
                <Card />
                <Card />

            </Paper>

        </div>
    )
}

export default List

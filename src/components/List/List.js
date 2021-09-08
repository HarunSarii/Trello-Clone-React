import React from 'react'
import { Paper, Typography, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mergeClasses } from '@material-ui/styles';


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
                <Typography>
                    Travel List
                </Typography>
            </Paper>

        </div>
    )
}

export default List

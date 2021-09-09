import { Button, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react'



const useStyle = makeStyles((theme) => ({
    card: {
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1),

    },
    input: {
        margin: theme.spacing(1)
    },
    btnConfirm: {
        color: 'white',
        background: 'green',
        '&:hover': {
            background: '#A7E074'
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)

    }
}))

function InputCard({ setOpen }) {
    const classes = useStyle();
    return (
        <div>
            <div >
                <Paper className={classes.card} >
                    <InputBase multiline fullWidth inputProps={{
                        classes: classes.input
                    }}
                        placeholder='enter a title for this card...'
                    />
                </Paper>
            </div>
            <div className={classes.confirm} >
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}  >Add Card</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default InputCard

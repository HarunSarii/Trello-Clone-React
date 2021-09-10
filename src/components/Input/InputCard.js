import React, { useState, useContext } from 'react'
import { Button, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import ContextApi from '../../utils/ContextApi';



const useStyle = makeStyles((theme) => ({
    card: {
        width: '280px',
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1),

    },
    input: {
        margin: theme.spacing(1)
    },
    btnConfirm: {
        color: 'white',
        background: '#228B22',
        '&:hover': {
            background: '#006400'
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)

    }
}))
function InputCard({ setOpen, listId, type }) {
    const classes = useStyle();
    const { addMoreCard, addMoreList } = useContext(ContextApi)
    const [title, setTitle] = useState('')
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }
    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title, listId);
            setTitle('');
            setOpen(false);
        } else {
            addMoreList(title);
            setTitle('');
            setOpen(false);
        }
    }

    const handleBlur = () => {
        setOpen(false);
        // setCardTitle('');
    }
    return (
        <div>
            <div >
                <Paper className={classes.card} >
                    <InputBase
                        onChange={handleOnChange}
                        multiline
                        onBlur={handleBlur}
                        fullWidth
                        inputProps={{
                            classes: classes.input
                        }}
                        value={title}
                        placeholder={type === 'card' ? 'Enter a title for this card...' : 'Enter List Title'}
                    />
                </Paper>
            </div>
            <div className={classes.confirm} >
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}  >{type === 'card' ? 'Add Card' : 'Add List'}</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default InputCard


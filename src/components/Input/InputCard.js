import React, { useState, useContext } from 'react'
import { Button, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import ContextApi from '../../utils/ContextApi';



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
        background: '#228B22',
        '&:hover': {
            background: '#006400'
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1)

    }
}))
function InputCard({ setOpen, listId }) {
    const classes = useStyle();
    const { addMoreCard } = useContext(ContextApi)
    const [cardTitle, setCardTitle] = useState('');

    const handleOnChange = (e) => {
        setCardTitle(e.target.value);
    }
    const handleBtnConfirm = () => {
        addMoreCard(cardTitle, listId);
        setCardTitle('');
        setOpen(false);
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
                        value={cardTitle}
                        placeholder='Enter a title for this card...'
                    />
                </Paper>
            </div>
            <div className={classes.confirm} >
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}  >Add Card</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default InputCard


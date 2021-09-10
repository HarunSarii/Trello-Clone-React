import React, { useContext, useState } from 'react'
import { InputBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ContextApi from '../../utils/ContextApi';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    input: {
        margin: theme.spacing(1),
        '&:focus': {
            background: '#ddd'
        }
    }
}))


function Title({ title, listId }) {
    const [open, setOpen] = useState(false);
    console.log('open:', open)
    const [newTitle, setNewTitle] = useState(title);
    const { updateListTitle } = useContext(ContextApi)

    const classes = useStyle();
    const handleOnChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleOnBlur = () => {
        setOpen(false);
        updateListTitle(newTitle, listId)
    }
    return (
        <div>
            {open ? (
                <div >
                    <InputBase
                        autoFocus
                        onChange={handleOnChange}
                        value={newTitle}
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                        onBlur={handleOnBlur}

                    />
                </div>
            ) : (
                <div className={classes.editableTitleContainer} >
                    <Typography onClick={() => setOpen(!open)} className={classes.editableTitle} >
                        {title}
                    </Typography>
                    <MoreHorizIcon />
                </div>
            )}


        </div>
    )
}

export default Title

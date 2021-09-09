import React, { useState } from 'react'
import { InputBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

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


function Title({ title }) {
    const [open, setOpen] = useState(false);
    console.log('open:', open)
    const classes = useStyle();
    return (
        <div>
            {open ? (
                <div >
                    <InputBase
                        value={title}
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}

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

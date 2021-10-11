import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: '25px',
        boxShadow: 'none',
        border: '1px solid #f1dddd',
        height: '40px',
        margin: '0 auto',
        marginTop: '20px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        '&:hover': {
            background: "transparent",
        }
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        '&:hover': {
            background: "transparent",
        }
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search "
                inputProps={{ 'aria-label': 'search ' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <ClearIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
                <Button className={classes.button} >Search</Button>
        </Paper>
    );
}
